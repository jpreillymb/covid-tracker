import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStats } from '../Actions/statsActions';
import CountUp from 'react-countup';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';
import '../App.css';

const TopStats = (props) => {

    useEffect(() => {
        props.fetchStats()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    var stats = {}
    if (props.loadingStats) {
        stats = {
            Infected: 0,
            Recovered: 0,
            Deaths: 0,
            date: "Loading..."
        }
    } else if (props.currentCountry === "Global") {
        var formatted_date = new Date(props.data.Date);
        formatted_date = formatted_date.toLocaleDateString() + " at " + formatted_date.toLocaleTimeString()
        stats = {
            Infected: props.data.Global.TotalConfirmed,
            Recovered: props.data.Global.TotalRecovered,
            Deaths: props.data.Global.TotalDeaths,
            date: formatted_date
        }
    } else {
        var country = props.data.Countries.find(element => element.Slug === props.currentCountry);
        if (!country) {
            stats = {
                Infected: 0,
                Recovered: 0,
                Deaths: 0,
                date: "No date found"
            }
        } else {
            var country_date = new Date(country.Date);
            country_date = country_date.toLocaleDateString() + " at " + country_date.toLocaleTimeString()
            stats = {
                Infected: country.TotalConfirmed,
                Recovered: country.TotalRecovered,
                Deaths: country.TotalDeaths,
                date: country_date
            }
        }
    }

    var state = {
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'COVID-19 Cases',
            backgroundColor: [
                'darkorange',
                'mediumseagreen',
                'orangered'
            ],
            hoverBackgroundColor: [
                'darkorange',
                'mediumseagreen',
                'orangered'
            ],
            data: [stats.Infected, stats.Recovered, stats.Deaths]
          }
        ]
    }

    return (
        <div className="card-container">
            <div className="card-container-box">
                <Card>
                    <CardContent>
                        <Typography className="orange" gutterBottom> Infected </Typography>
                        <Typography variant="h5"> 
                            <CountUp
                                start={0}
                                end={stats.Infected}
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography variant="caption" className="stats-date-color"> As of: {stats.date} </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="card-container-box">
                <Card>
                    <CardContent>
                        <Typography className="green" gutterBottom> Recovered </Typography>
                        <Typography variant="h5"> 
                            <CountUp
                                start={0}
                                end={stats.Recovered} 
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography variant="caption" className="stats-date-color"> As of: {stats.date} </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="card-container-box">
                <Card>
                    <CardContent>
                        <Typography className="red" gutterBottom> Deaths </Typography>
                        <Typography variant="h5"> 
                            <CountUp
                                start={0}
                                end={stats.Deaths} 
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography variant="caption" className="stats-date-color"> As of: {stats.date} </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="card-container-box">
                <Pie
                    data={state}
                    options={{
                        title:{
                        display:false,
                        text:'COVID-19 Cases',
                        fontSize:20
                        },
                        legend:{
                        display:false,
                        position:'top'
                        },
                        cutoutPercentage: 65,
                    }}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.info.data,
    loadingStats: state.info.loadingStats,
    currentCountry: state.currentCountry.current
})

const mapDispatchToProps = dispatch => {
    return {
        fetchStats: () => {
            dispatch(fetchStats())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStats)
