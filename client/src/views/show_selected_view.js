const PubSub = require("../helpers/pub_sub");
const ResultListView = require("./result_list_view")
const CoolDataView = require("./cool_data_view")


const ShowSelectedView = function (dateContainer) {
  this.container = dateContainer
}

ShowSelectedView.prototype.bindEvents = function () {
  PubSub.subscribe("FpCalculator:footprint-retrieved", (evt) => {
    const footprint = evt.detail;

    const dateHeader = document.querySelector("#date-header");
    dateHeader.innerHTML = "";
    dateHeader.textContent = `Your selected entry: ${footprint.date}.`


    const behavioursHeader = document.querySelector("#behaviours-header");
    behavioursHeader.textContent = "Selected Footprint's Options"

    const dateSelect = document.querySelector("#dateSelect");
    // console.dir(dateSelect);
    dateSelect.value = footprint.date;

    const dietSelect = document.querySelector("#diet");
    dietSelect[parseInt(Object.values(footprint.scores[0]))].selected = true;

    const commuteSelect = document.querySelector("#commute");
    commuteSelect[parseInt(Object.values(footprint.scores[1]))].selected = true;

    const recyclingSelect = document.querySelector("#recycling");
    recyclingSelect[parseInt(Object.values(footprint.scores[2]))].selected = true;

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




  })
};
// form populated using selected fp data
//
//
// show update button
// update button with eventlistener that sends update request
// re renders results
//
//create update function in requesthelper
//
// hide calculate button
//
// delete button?

module.exports = ShowSelectedView;
