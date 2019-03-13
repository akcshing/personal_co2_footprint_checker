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
    PubSub.publish("FpCalculator:latest-footprint", footprint);

    console.log("selected view:", footprint);
    const dateHeader = document.querySelector("#date-header");
    dateHeader.innerHTML = "";
    dateHeader.textContent = `Your selected entry: ${footprint.date}.`

    const dateSelect = document.querySelector("#newDateSelect");
    dateSelect.value = footprint.date;

    const dietSelect = document.querySelector("#newDiet");
    dietSelect.value = parseInt(Object.values(footprint.scores[0]))

    const commuteSelect = document.querySelector("#newCommute");
    commuteSelect.value = parseInt(Object.values(footprint.scores[1]))

    const recyclingSelect = document.querySelector("#newRecycling");
    recyclingSelect.value = parseInt(Object.values(footprint.scores[2]))

    const heatingSelect = document.querySelector("#newHeating");
    heatingSelect.value = parseInt(Object.values(footprint.scores[3]))

    const flyingSelect = document.querySelector("#newFlying");
    flyingSelect.value = parseInt(Object.values(footprint.scores[4]))

    const clothesFootwearSelect = document.querySelector("#newClothes");
    clothesFootwearSelect.value = parseInt(Object.values(footprint.scores[5]))

    const electronicsAppliancesSelect = document.querySelector("#newElectronics");
    electronicsAppliancesSelect.value = parseInt(Object.values(footprint.scores[6]))

    const petsSelect = document.querySelector("#newPets");
    petsSelect.value = parseInt(Object.values(footprint.scores[7]))

    const beautyGroomingProductsSelect = document.querySelector("#newBeauty");
    beautyGroomingProductsSelect.value = parseInt(Object.values(footprint.scores[8]))

    const paperBasedProductsSelect = document.querySelector("#newPaper");
    paperBasedProductsSelect.value = parseInt(Object.values(footprint.scores[9]))
    // paperBasedProductsSelect[parseInt(Object.values(footprint.scores[9]))].selected = true;

    const fpIdInput = document.querySelector("#fpId")
    fpIdInput.value = footprint._id
    console.log("id:", footprint._id);

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
      {recycling: updateFormData.newRecycling.value},
      {heating: updateFormData.newHeating.value},
      {flying: updateFormData.newFlying.value},
      {clothes: updateFormData.newClothes.value},
      {electronics: updateFormData.newElectronics.value},
      {pets: updateFormData.newPets.value},
      {beauty: updateFormData.newBeauty.value},
      {paper: updateFormData.newPaper.value},
    ],
    footprint: 0
  }
  return updatedUserFootprint;
};




// delete button?

module.exports = ShowSelectedView;
