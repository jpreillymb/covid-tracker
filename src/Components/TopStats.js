import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStats } from '../Actions/statsActions';
import CountUp from 'react-countup';
import { Card, CardContent, Typography } from '@material-ui/core';
import '../App.css';

const TopStats = (props) => {

    useEffect(() => {
        props.fetchStats()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    var stats = {}
    if (props.loadingStats) {
        stats = {
            Active: 0,
            Recovered: 0,
            Deaths: 0,
            date: "Loading..."
        }
    } else if (props.currentCountry === "Global") {
        var formatted_date = new Date(props.data.Date);
        formatted_date = formatted_date.toLocaleDateString() + " at " + formatted_date.toLocaleTimeString()
        stats = {
            Active: props.data.Global.TotalConfirmed - props.data.Global.TotalRecovered - props.data.Global.TotalDeaths,
            Recovered: props.data.Global.TotalRecovered,
            Deaths: props.data.Global.TotalDeaths,
            date: formatted_date
        }
    } else {
        var country = props.data.Countries.find(element => element.Slug === props.currentCountry);
        if (!country) {
            stats = {
                Active: 0,
                Recovered: 0,
                Deaths: 0,
                date: "No date found"
            }
        } else {
            var country_date = new Date(country.Date);
            country_date = country_date.toLocaleDateString() + " at " + country_date.toLocaleTimeString()
            stats = {
                Active: country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths,
                Recovered: country.TotalRecovered,
                Deaths: country.TotalDeaths,
                date: country_date
            }
        }
    }

    return (
        <div className="card-container">
            <div className="card-container-box">
                <Card>
                    <CardContent>
                        <Typography className="orange" gutterBottom> Active </Typography>
                        <Typography variant="h5"> 
                            <CountUp
                                start={0}
                                end={stats.Active}
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
