import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography, Card } from '@material-ui/core';
import { Line, Bar } from 'react-chartjs-2';
import { fetchChartData } from '../Actions/statsActions';
import '../App.css';

export const CovidChart = (props) => {

  useEffect(() => {
    if (props.currentCountry !== 'Global') {
      props.fetchChart(props.currentCountry);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentCountry]);

  var chart = null;

  if (!props.loadingStats && props.currentCountry === "Global") {
    const state = {
      labels: ['Infected', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: 'COVID CASES',
          backgroundColor: [
            'darkorange',
            'mediumseagreen',
            'orangered',
          ],
          hoverBackgroundColor: [
            'darkorange',
            'mediumseagreen',
            'orangered',
          ],
          data: [props.data.Global.TotalConfirmed - props.data.Global.TotalRecovered - props.data.Global.TotalDeaths, props.data.Global.TotalRecovered, props.data.Global.TotalDeaths],
        },
      ],
    };

    var barChart1 = (
      <Bar
        data={state}
        options={{
            legend:{
              display: false
            }
        }}
      />
    );
    chart = barChart1;
    } else if (!props.loadingChart && props.chartData.length === 1) {
        const state = {
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'COVID-19 Cases',
                backgroundColor: [
                  'darkorange',
                  'mediumseagreen',
                  'orangered',
                ],
                hoverBackgroundColor: [
                  'darkorange',
                  'mediumseagreen',
                  'orangered',
                ],
                data: [props.chartData[0].Confirmed - props.chartData[0].Recovered - props.chartData[0].Deaths, props.chartData[0].Recovered, props.chartData[0].Deaths],
              },
            ],
          };
      
          var barChart2 = (
            <Bar
              data={state}
              options={{
                legend:{
                    display: false
                }
            }}
            />
          );
          chart = barChart2;

  } else if (!props.loadingChart && (props.currentCountry !== "Global")){
    var lineChart = (
      <Line
        data={{
          labels: props.chartData.map((daily) => {
            const day = new Date(daily.Date);
            return day.toDateString();
          }),
          datasets: [{
            data: props.chartData.map((daily) => daily.Confirmed - daily.Recovered - daily.Deaths),
            label: 'Active',
            borderColor: 'darkorange',
            fill: true,
          }, {
            data: props.chartData.map((daily) => daily.Recovered),
            label: 'Recovered',
            borderColor: 'mediumseagreen',
            fill: true,
          }, {
            data: props.chartData.map((daily) => daily.Deaths),
            label: 'Deaths',
            borderColor: 'orangered',
            fill: true,
          }],
        }}
      />
    );
    chart = lineChart;
  } else {
    var loading = (<Typography> Loading... </Typography>);
    chart = loading;
  }

  return (
    <Card className="chart-container">
      { chart }
    </Card>
  );
};

const mapStateToProps = (state) => ({
  data: state.info.data,
  loadingStats: state.info.loadingStats,
  loadingChart: state.info.loadingChart,
  chartData: state.info.chartData,
  currentCountry: state.currentCountry.current,
});

const mapDispatchToProps = (dispatch) => ({
  fetchChart: (country) => {
    dispatch(fetchChartData(country));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CovidChart);
