const Highcharts = require('highcharts');
const PubSub = require("../helpers/pub_sub");


const CoolDataView = function (container) {
  this.container = container;
};

CoolDataView.prototype.bindEvents = function () {
  PubSub.subscribe("FpCalculator:latest-footprint", (evt) => {
    const footprint = evt.detail;
    this.renderChart(footprint);
    // console.log(footprint);
  })

  // const individualGraphBtn = document.querySelector('#individualGraphBtn')
  // individualGraphBtn.addEventListener('click', (evt) => {
  // this.renderChart(footprint);
  // });

  const timelineGraphBtn = document.querySelector('#timelineGraphBtn')
  timelineGraphBtn.addEventListener('click', (evt) => {
    PubSub.publish('coolDataView:timelineGraphBtn-clicked')
  })

  PubSub.subscribe('FpCalculator:index-for-graph', (evt) => {
    const allFootprints = evt.detail;
    const sortedFootprints = allFootprints.sort(function (a, b) {
      let dateA = a.date;
      let dateB = b.date;
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
    this.renderTimelineChart(sortedFootprints);
    // console.log('I am here:', sortedFootprints);
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

CoolDataView.prototype.renderTimelineChart = function (sortedFootprints) {


  // const seriesArr =[]
  // sortedFootprints.forEach((footprint) => {
  //   seriesObj = {
  //     name: footprint.footprint,
  //     data: [1]
  //   }
  //   seriesArr.push(seriesObj)
  // });

  const footprintArr = [];
  sortedFootprints.forEach((footprint) => {
    footprintArr.push(footprint.footprint);
  })

  const datesArr = [];
  sortedFootprints.forEach((footprint) => {
    datesArr.push(footprint.date);
  });

  const dietDataArr = [];
  const commuteDataArr = [];
  const recyclingDataArr = [];
  const heatingDataArr = [];
  const flyingDataArr = [];
  const clothesDataArr = [];
  const electronicsDataArr = [];
  const petsDataArr = [];
  const beautyDataArr = [];
  const paperDataArr = [];

  sortedFootprints.forEach((footprint) => {
    dietDataArr.push(parseInt(Object.values(footprint.scores[0])));
    commuteDataArr.push(parseInt(Object.values(footprint.scores[1])));
    recyclingDataArr.push(parseInt(Object.values(footprint.scores[2])));
    heatingDataArr.push(parseInt(Object.values(footprint.scores[3])));
    flyingDataArr.push(parseInt(Object.values(footprint.scores[4])));
    clothesDataArr.push(parseInt(Object.values(footprint.scores[5])));
    electronicsDataArr.push(parseInt(Object.values(footprint.scores[6])));
    petsDataArr.push(parseInt(Object.values(footprint.scores[7])));
    beautyDataArr.push(parseInt(Object.values(footprint.scores[8])));
    paperDataArr.push(parseInt(Object.values(footprint.scores[9])));
  });

  console.log("I AM DIET ARRAY:", paperDataArr);

  // console.log("datesarray:", datesArr);

  Highcharts.chart(this.container, {
    chart: {
      type: 'column'
    },
    title: {
      text: "Footprint Result"
    },
    xAxis: {
      categories: datesArr
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
    series: [{
      name: 'Diet',
      data: dietDataArr
    }, {
      name: 'Commute',
      data: commuteDataArr
    }, {
      name: 'Recycling',
      data: recyclingDataArr
    }, {
      name: 'Heating',
      data: heatingDataArr
    }, {
      name: 'Flying',
      data: flyingDataArr
    }, {
      name: 'Clothes',
      data: clothesDataArr
    }, {
      name: 'Electronics',
      data: electronicsDataArr
    }, {
      name: 'Pets',
      data: petsDataArr
    }, {
      name: 'Beauty',
      data: beautyDataArr
    }, {
      name: 'Paper',
      data: paperDataArr
    }]

  });

};


module.exports = CoolDataView;
