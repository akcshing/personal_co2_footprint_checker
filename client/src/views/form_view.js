const PubSub = require("../helpers/pub_sub");

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener("submit", (evt)=>{
    this.handleSubmit(evt);
  })
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newUserFootprint = this.createFootprint(evt.target);
  // console.log(newUserFootprint);
  PubSub.publish("FormView:form-submitted", newUserFootprint);
  evt.target.reset();
};

FormView.prototype.createFootprint = function (formData) {
  const newUserFootprintObj = {
    diet: formData.diet.value,
    commute: formData.commute.value,
    recycling: formData.recycling.value,
    footprint: 0
  }
  return newUserFootprintObj;
};

module.exports = FormView;
