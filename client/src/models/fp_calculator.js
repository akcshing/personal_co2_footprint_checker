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
