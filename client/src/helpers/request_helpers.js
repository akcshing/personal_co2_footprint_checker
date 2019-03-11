const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.post = function (footprintData) {
  return fetch(this.url, {
    method: "POST",
    body: JSON.stringify(footprintData),
    headers: { "Content-Type": "application/json"}
  })
    .then((response) => response.json());
};

module.exports = RequestHelper;
