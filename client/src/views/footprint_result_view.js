const PubSub = require("../helpers/pub_sub");

const FootprintResultView = function(container) {
  this.container = container;
};

FootprintResultView.prototype.bindEvents = function () {
  PubSub.subscribe("FpCalculator:latest-footprint", (evt) => {
    this.renderResult(evt.detail);
  })
};

FootprintResultView.prototype.renderResult = function (latestFootprint) {
  this.container.innerHTML= '';

  const result = latestFootprint.footprint

  const resultDisplay = document.createElement("h3");
  resultDisplay.textContent = `Your carbon footprint is: ${result}`;
  this.container.appendChild(resultDisplay);
};

module.exports = FootprintResultView;
