var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its burger specific database functions.
var burger = require("../models/burger.js");


// Create all routes and set up logic within those routes.
router.get("/", function(req, res) {
  burger.all(function(data) {
    // console.log(data);
    var hbsObject = {
      burger: data
    }
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new burgers
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
// Export routes for server.js to use
