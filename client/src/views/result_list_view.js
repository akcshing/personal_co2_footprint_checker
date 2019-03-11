const PubSub = require("../helpers/pub_sub");

const ResultListView = function (container) {
  this.container = container;
};

ResultListView.prototype.bindEvents = function () {
  PubSub.subscribe("FpCalculator:latest-footprint", (evt)=> {
    const footprint = evt.detail;
    this.renderScores(footprint);
  })
};

ResultListView.prototype.renderScores = function (footprint) {
  const scoreList = document.createElement("ul");
  this.container.appendChild(scoreList);

  const dietScore = document.createElement("li");
  dietScore.textContent = `Diet score: ${footprint.diet}`;
  scoreList.appendChild(dietScore);

  const commuteScore = document.createElement("li");
  commuteScore.textContent = `Commute score: ${footprint.commute}`;
  scoreList.appendChild(commuteScore);

  const recyclingScore = document.createElement("li");
  recyclingScore.textContent = `Recycling score: ${footprint.recycling}`;
  scoreList.appendChild(recyclingScore);

};

module.exports = ResultListView;
