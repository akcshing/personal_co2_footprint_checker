const PubSub = require('../helpers/pub_sub.js');


const ShowSelectView = function (container) {
  this.container = container;
};

ShowSelectView.prototype.bindEvents = function () {
  PubSub.subscribe("FpCalculator:index-loaded", (evt) => {
    const allFootprints = evt.detail;
    // console.log(allFootprints);
    this.populate(allFootprints);
  })
  PubSub.subscribe("FpCalculator:all-data-loaded", (evt) => {
    const allFootprints = evt.detail;
    // console.log(allFootprints);
    this.populate(allFootprints);
  })

  this.container.addEventListener('change', (evt) => {
    const id = evt.target.value;
    // console.log(id);
    PubSub.publish("ShowSelectView:id-selected", id)

    // CHECK PUBLISH CHANNEL!
  })
};

ShowSelectView.prototype.populate = function (allFootprints) {
  this.container.innerHTML = "";
  allFootprints.forEach( (footprint) => {
    const option = document.createElement("option");
    option.value = footprint._id
    // console.log(footprint._id);
    option.textContent = footprint.date
    this.container.appendChild(option);
  })
};

module.exports = ShowSelectView;
