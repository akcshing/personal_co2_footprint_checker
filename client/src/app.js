const FormView = require("./views/form_view");
const FpCalculator = require("./models/fp_calculator");
const FootprintResultView = require("./views/footprint_result_view");
const ResultListView = require("./views/result_list_view");
const CoolDataView = require("./views/cool_data_view");
const ShowSelectView = require("./views/show_select_view");

document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM loaded");

  const showSelect = document.querySelector("#all-footprints");
  const showSelectView = new ShowSelectView(showSelect);
  showSelectView.bindEvents();

  const form = document.querySelector("#form");
  const formView = new FormView(form);
  formView.bindEvents();

  const url = "http://localhost:3000/api/userfootprint"
  const fpCalculator = new FpCalculator(url);
  fpCalculator.bindEvents();
  fpCalculator.getData();

  const fpResultContainer = document.querySelector("#footprint-result-view");
  const footprintResultView = new FootprintResultView(fpResultContainer);
  footprintResultView.bindEvents();

  const resultListViewContainer = document.querySelector("#result-list-view");
  const resultListView = new ResultListView(resultListViewContainer);
  resultListView.bindEvents();

  const coolDataContainer = document.querySelector("#cool-data-view");
  const coolDataView = new CoolDataView(coolDataContainer);
  coolDataView.bindEvents();

})
