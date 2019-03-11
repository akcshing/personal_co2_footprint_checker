// const RequestHelper =
const PubSub = require("../helpers/pub_sub");

const FpCalculator = function (url) {
  this.url = url;
  // this.request = new RequestHelper(this.url);
}

FpCalculator.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:form-submitted", (evt) => {
    // console.log(evt.detail);
    this.addScores(evt.detail);
  })
};


FpCalculator.prototype.addScores = function (scores) {
  const footprint = parseInt(scores.diet) + parseInt(scores.commute) + parseInt(scores.recycling)
  console.log(footprint);
};


module.exports = FpCalculator;
