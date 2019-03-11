const RequestHelper = require("../helpers/request_helpers");
const PubSub = require("../helpers/pub_sub");

const FpCalculator = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

FpCalculator.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:form-submitted", (evt) => {
    // console.log(evt.detail);
    evt.detail.footprint = this.addScores(evt.detail);
    // console.log(evt.detail);
    this.postFootprintData(evt.detail);
  })

  PubSub.subscribe("ShowSelectView:id-selected", (evt)=>{
    const id = evt.detail;
    // console.log(id);
    this.request.getById(id)
      .then((footprint) => {
        // console.log(footprint);
        PubSub.publish("FpCalculator:latest-footprint", footprint)
      })
  })
};

FpCalculator.prototype.getData = function () {
  this.request.get()
    .then((allFootprints) => {
      // console.log(allFootprints);
      PubSub.publish("FpCalculator:index-loaded", allFootprints);
    })
};

FpCalculator.prototype.addScores = function (scores) {
  const footprint = parseInt(scores.diet) + parseInt(scores.commute) + parseInt(scores.recycling)
  return footprint;
};

FpCalculator.prototype.postFootprintData = function (footprintData) {
  this.request.post(footprintData)
    .then((allFootprints) => {
      // console.log(allFootprints);
      const latestFootprint = allFootprints[allFootprints.length - 1];
      // console.log(latestFootprint);
      PubSub.publish("FpCalculator:all-data-loaded", allFootprints);
      PubSub.publish("FpCalculator:latest-footprint", latestFootprint);
    })
};



module.exports = FpCalculator;
