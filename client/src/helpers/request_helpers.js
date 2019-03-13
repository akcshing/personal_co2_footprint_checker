const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

RequestHelper.prototype.getById = function(id) {
  return fetch(`${this.url}/${id}`)
    .then(response => response.json());
};

RequestHelper.prototype.post = function (footprintData) {
  return fetch(this.url, {
    method: "POST",
    body: JSON.stringify(footprintData),
    headers: { "Content-Type": "application/json"}
  })
    .then((response) => response.json());
};

RequestHelper.prototype.put = function (id, updatedFootprintData) {
  return fetch(`${this.url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedFootprintData),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
};

module.exports = RequestHelper;
