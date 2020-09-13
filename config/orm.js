// Import MySQL connection.
var connection = require("../config/connection.js")

// Pass in value length of array and it converts the length to that many question marks
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Converts object into an array with a single comma seperated string.
// for (var key in ob) {
//   var value = ob[key];
//   if (Object.hasOwnProperty.call(ob, key)) {
//     if (typeof value === "string" && value.indexOf(" ") >= 0) {
//       value = "'" + value + "'";
//     }
//     arr.push(key + "=" + value);
//   }
// }

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  // An example of objColVals would be {name: cougar, hungry: false}
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET";
    queryString += objtoSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
}

module.exports = orm;
// Exports the orm object for the model.
