import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import '../App.css';

export const Header = (props) => {

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
        var country = props.chartData.slice(-1).pop()
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
                Active: country.Active,
                Recovered: country.Recovered,
                Deaths: country.Deaths,
                date: country_date
            }
        }
    }

    var state = {
        labels: ['Active', 'Recovered', 'Deaths'],
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
                data: [stats.Active, stats.Recovered, stats.Deaths]
            }
        ]
    }

    return (
        <div className="header">

            <div className="outline">
                <Pie
                    data={state}
                    options={{
                        responsive: false,
                        title: {
                            display: false,
                            text: 'COVID-19 Cases',
                            fontSize: 20
                        },
                        legend: {
                            display: false,
                            position: 'top'
                        },
                        cutoutPercentage: 60,
                    }}
                />
            </div>
            <img
                className="covid-logo"
                src='covid19icon.png'
                title='covid-19 icon'
                alt=""
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.info.data,
    loadingStats: state.info.loadingStats,
    currentCountry: state.currentCountry.current,
    chartData: state.info.chartData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
