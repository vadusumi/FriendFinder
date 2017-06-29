

//Importing the friends array
var friendData = require("../data/friends");


//GET and POST requests.
module.exports = function(app){

	//Visiting /api/friends displays the JSON data for the friendData object.
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	//Submitting form data to /api/friends pushes the resultant JSON data into the friendData array.
	app.post("/api/friends", function(req, res){
		for (var i = 0; i < friendData.length, i++){
			
		}
		friendData.push(req.body);
	});

	//Clears the array when you submit a POST to /api/clear
	app.post("/api/clear", function(){
		friendData = [];
	});
};