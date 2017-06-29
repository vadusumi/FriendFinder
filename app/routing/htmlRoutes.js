
//Dependencies
var path = require("path");

//Routing

//When users visit survey page, they are sent this HTML content.

module.exports = function(app) {

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});


//If no matching route found, defaults to home.html
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};