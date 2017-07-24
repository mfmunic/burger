var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controllers.js");

var PORT = process.env.PORT || 5000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
