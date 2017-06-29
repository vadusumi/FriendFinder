
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");


//Express Setup
var app = express();
var PORT = process.env.PORT || 3000;

//Body Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});