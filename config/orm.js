var connection = require("../config/connection.js")

var orm = {
  selectAll: function(x, cb) {
    var queryString = "";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
  insertOne: function(x, cb) {
    var queryString = "";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
  updateOne: function(x, cb) {
    var queryString = "";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
}

module.exports = orm;
// This exports the orm object for the model.
