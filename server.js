//DEPENDENCIES
var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

//Static Content
app.use(express.static(__dirname + "/app"));

//Config Express
var app = express();
var PORT = process.env.PORT || 8080;

//BodyParser Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//HandleBars Config
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Routes
var routes = require("./controllers/controller.js");

app.use("/", routes);

//Server Listener
app.listen(PORT, function(error) {
	if (error){
		console.log(error);
	} else {
		console.log("App listening on PORT: " + PORT);
	};
  
});