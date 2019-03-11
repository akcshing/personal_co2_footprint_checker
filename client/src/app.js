const FormView = require("./views/form_view");
const FpCalculator = require("./models/fp_calculator");

document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM loaded");

  const form = document.querySelector("#form");
  const formView = new FormView(form);
  formView.bindEvents();

  const url = "http://localhost:3000/api/userfootprint"
  const fpCalculator = new FpCalculator(url);
  fpCalculator.bindEvents();



})
