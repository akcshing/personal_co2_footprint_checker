const Highcharts = require('highcharts');
const PubSub = require("../helpers/pub_sub");


const CoolDataView = function (container) {
  this.container = container;
};

CoolDataView.prototype.bindEvents = function () {
  PubSub.subscribe("FpCalculator:latest-footprint", (evt) => {
    const footprint = evt.detail;
    this.renderChart(footprint);
    console.log(footprint);
  })
};


CoolDataView.prototype.renderChart = function (footprint) {

  const seriesArr =[]
  footprint.scores.forEach((score) => {
    seriesObj = {
      name: Object.keys(score),
      data: [parseInt(Object.values(score))]
    }
    seriesArr.push(seriesObj)
  });

  Highcharts.chart(this.container, {
    chart: {
        type: 'column'
    },
    title: {
        text: "Footprint Result"
    },
    xAxis: {
        categories: ['Your footprint result']
    },
    yAxis: {
        min: 0,
        title: {
            text: "Footprint Scores"
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: seriesArr

});
};


module.exports = CoolDataView;
