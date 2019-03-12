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
  const newUserFootprintObj =
  {
    date: formData.dateSelect.value,
    scores: [
      {diet: formData.diet.value},
      {commute: formData.commute.value},
      {recycling: formData.recycling.value},
      {heating: formData.heating.value},
      {flying: formData.flying.value},
      {clothes: formData.clothes.value},
      {electronics: formData.electronics.value},
      {pets: formData.pets.value},
      {beauty: formData.beauty.value},
      {paper: formData.paper.value},
    ],
    footprint: 0
  }
  return newUserFootprintObj;
};

module.exports = FormView;
