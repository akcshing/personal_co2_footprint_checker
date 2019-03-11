const FormView = require("./views/form_view");

document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM loaded");

  const form = document.querySelector("#form");
  const formView = new FormView(form);
  formView.bindEvents();


})
