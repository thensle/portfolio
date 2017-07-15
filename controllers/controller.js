var express = require("express");
var router = express.Router();

var devData = require("../models/Code-data.json");

//Get Routes
router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
    res.render("home");
});

router.get("/blog", function(req, res) {
    res.render("blog-main");
});

router.get("/projects", function(req, res) {
    res.render("project-index", {data: devData});
});

router.get("/projects/:title", function(req, res) {
	var title = req.params.title;
	var index;

	if (title === "Connect-ED"){
		index = 0;
	} else if (title === "Tell Me, Who Are You"){
		index = 1;
	} else {
		index = 2;
	};

    res.render("project-details", {data: devData[index]});
});

module.exports = router;