const PubSub = require("../helpers/pub_sub");
const ResultListView = require("./result_list_view")
const CoolDataView = require("./cool_data_view")


const ShowSelectedView = function (form) {
  this.container = form;
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

    const updateButton = document.createElement("input");
    updateButton.value = "Update";
    updateButton.type = "submit";
    updateButton.id = "update";
    this.container.appendChild(updateButton);




  })
};

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
