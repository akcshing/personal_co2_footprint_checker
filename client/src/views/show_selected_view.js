const PubSub = require("../helpers/pub_sub");
const ResultListView = require("./result_list_view")
const CoolDataView = require("./cool_data_view")


const ShowSelectedView = function (form) {
  this.form = form;
}

ShowSelectedView.prototype.bindEvents = function () {
  PubSub.subscribe("FpCalculator:footprint-retrieved", (evt) => {
    const footprint = evt.detail;

    const dateHeader = document.querySelector("#date-header");
    dateHeader.innerHTML = "";
    dateHeader.textContent = `Your selected entry: ${footprint.date}.`


    const dateSelect = document.querySelector("#newDateSelect");
    // console.dir(dateSelect);
    dateSelect.value = footprint.date;

    const dietSelect = document.querySelector("#newDiet");
    dietSelect[parseInt(Object.values(footprint.scores[0]))].selected = true;

    const commuteSelect = document.querySelector("#newCommute");
    commuteSelect[parseInt(Object.values(footprint.scores[1]))].selected = true;

    const recyclingSelect = document.querySelector("#newRecycling");
    recyclingSelect[parseInt(Object.values(footprint.scores[2]))].selected = true;
  });

  this.form.addEventListener("submit", (evt) => {
    this.handleUpdateSubmit(evt);
  })
}

ShowSelectedView.prototype.handleUpdateSubmit = function (evt) {
  evt.preventDefault();
  const updatedUserFootprint = this.createUpdatedFootprint(evt.target);
  console.log(updatedUserFootprint);
  PubSub.publish("ShowSelectedView:update-form-submitted", updatedUserFootprint);
  evt.target.reset();
};

ShowSelectedView.prototype.createUpdatedFootprint = function (updateFormData) {
  const updatedUserFootprint =
  {
    date: updateFormData.newDateSelect.value,
    scores: [
      {diet: updateFormData.newDiet.value},
      {commute: updateFormData.newCommute.value},
      {recycling: updateFormData.newRecycling.value}
    ],
    footprint: 0
  }
  return updatedUserFootprint;
};




// delete button?

module.exports = ShowSelectedView;
