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

  this.container.innerHTML = '';

  const scoreList = document.createElement("ul");
  this.container.appendChild(scoreList);

  footprint.scores.forEach((score) => {
    const scoreElement = document.createElement("li");
    scoreElement.textContent = `${Object.keys(score)}: ${Object.values(score)}`;
    scoreList.appendChild(scoreElement);
  })


  // const dietScore = document.createElement("li");
  // dietScore.textContent = `Diet score: ${footprint.diet}`;
  // scoreList.appendChild(dietScore);
  //
  // const commuteScore = document.createElement("li");
  // commuteScore.textContent = `Commute score: ${footprint.commute}`;
  // scoreList.appendChild(commuteScore);
  //
  // const recyclingScore = document.createElement("li");
  // recyclingScore.textContent = `Recycling score: ${footprint.recycling}`;
  // scoreList.appendChild(recyclingScore);

};

module.exports = ResultListView;
