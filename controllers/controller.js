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
	console.log(devData);
    res.render("project-index", {data: devData});
});

router.get("/projects/:title", function(req, res) {
    res.render("project-details");
});

module.exports = router;