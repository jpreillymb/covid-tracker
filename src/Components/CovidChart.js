import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchChartData } from '../Actions/statsActions';
import { Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import '../App.css';

export const CovidChart = (props) => {
    
    useEffect(() => {
        if (props.currentCountry !== "Global") {
            props.fetchChart(props.currentCountry)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentCountry]);

    if (props.currentCountry === "Global") {
        return (
            <div>
                Select a country to see its trends
            </div>
        );
    }
    
    const LineChart = (
        props.loadingChart ?
        <Typography> Loading... </Typography>
        :
        <Line 
            data={{
                labels: props.chartData.map( daily => {
                    var day = new Date(daily.Date);
                    return day.toDateString();
                }),
                datasets: [{
                    data: props.chartData.map( daily => daily.Active),
                    label: 'Infected',
                    borderColor: 'darkorange',
                    fill: true,
                }, {
                    data: props.chartData.map( daily => daily.Recovered),
                    label: 'Recovered',
                    borderColor: 'mediumseagreen',
                    fill: true,
                }, {
                    data: props.chartData.map( daily => daily.Deaths),
                    label: 'Deaths',
                    borderColor: 'orangered',
                    fill: true,
                }]
            }}

        />
    );
    console.log(props.chartData);
    return (
        <div className="chart-container">
            { LineChart }
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.info.data,
    loadingStats: state.info.loadingStats,
    loadingChart: state.info.loadingChart,
    chartData: state.info.chartData,
    currentCountry: state.currentCountry.current
})

const mapDispatchToProps = dispatch => {
    return {
        fetchChart: (country) => {
            dispatch(fetchChartData(country))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CovidChart)
