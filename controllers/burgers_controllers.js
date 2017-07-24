var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/index", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
	console.log(req.body.name)
	burger.add(req.body.name, function() {
    	res.redirect("/index");
  	});
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

	burger.update(req.params.id, function() {
    	res.redirect("/index");
	});
});

module.exports = router;