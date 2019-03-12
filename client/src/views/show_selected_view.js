const PubSub = require("../helpers/pub_sub");
const ResultListView = require("./result_list_view")
const CoolDataView = require("./cool_data_view")


const ShowSelectedView = function (form) {
  this.form = form;
}

ShowSelectedView.prototype.bindEvents = function () {
  PubSub.subscribe("FpCalculator:footprint-retrieved", (evt) => {

    const hidingPostForm = document.querySelector("#form-view");
    hidingPostForm.classList.add("hidden");

    const showingUpdateForm = document.querySelector("#updateFormView");
    showingUpdateForm.classList.remove("hidden");

    const footprint = evt.detail;
    console.log("selected view:", footprint);
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

    const fpIdInput = document.querySelector("#fpId")
    fpIdInput.value = footprint._id
    console.log("id:", footprint._id);

    const heatingSelect = document.querySelector("#heating");
    heatingSelect[parseInt(Object.values(footprint.scores[3]))].selected = true;

    const flyingSelect = document.querySelector("#flying");
    flyingSelect[parseInt(Object.values(footprint.scores[4]))].selected = true;

    const clothesFootwearSelect = document.querySelector("#clothes-footwear");
    clothesFootwearSelect[parseInt(Object.values(footprint.scores[5]))].selected = true;

    const electronicsAppliancesSelect = document.querySelector("#electronics-appliances");
    electronicsAppliancesSelect[parseInt(Object.values(footprint.scores[6]))].selected = true;

    const petsSelect = document.querySelector("#pets");
    petsSelect[parseInt(Object.values(footprint.scores[7]))].selected = true;

    const beautyGroomingProductsSelect = document.querySelector("#beauty");
    beautyGroomingProductsSelect[parseInt(Object.values(footprint.scores[8]))].selected = true;

    const paperBasedProductsSelect = document.querySelector("#paper");
    paperBasedProductsSelect[parseInt(Object.values(footprint.scores[9]))].selected = true;
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const id = evt.target.fpId.value;
      console.log("hi", id);
      this.handleUpdateSubmit(id, evt.target);
    })
  })
}

ShowSelectedView.prototype.handleUpdateSubmit = function (id, evt) {
  // evt.preventDefault();
  const updatedUserFootprint = this.createUpdatedFootprint(evt);

  const updatedItem = {id: id, updatedData: updatedUserFootprint}
  // console.log("hello", evt);
  // console.log(updatedUserFootprint);
  PubSub.publish("ShowSelectedView:update-form-submitted", updatedItem);

};

ShowSelectedView.prototype.createUpdatedFootprint = function (updateFormData) {
  console.log("update form data: ", updateFormData);
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
