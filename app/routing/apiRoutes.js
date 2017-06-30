

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

		console.log(req.body);
		
		//Variables. 'diffTotal' is the total difference value of the score comparison.
		//'diffs' is an array of all total difference values.
		var diffTotal = 0;
		var diffs = [];

		//The magic. Outer loop loops through all friends...
		for (var i = 0; i < friendData.length; i++){
			//...while inner loop loops through all score values and gets
			//the absolute value of all subtractions.
			for (var j = 0; j < friendData[i].scores.length; j++){
				var numWork = Math.abs(parseInt(req.body.scores[j]) - parseInt(friendData[i].scores[j]));
				diffTotal += numWork;
			}
			//Outer loop pushes total difference value for the friend,
			//then 'i' increments and the process repeats.
			diffs.push(diffTotal);
		}

		console.log("Diffs: " + diffs);

		//Gets the minimum value out of the 'diffs' array.
		var diffMin = Math.min.apply(0, diffs);

		console.log("DiffMin: " + diffMin);

		//Finding out who had the minimum difference!
		//This feels a bit backwards but I'm not sure how to do it otherwise.
		for (var k = 0; k < diffs.length; k++){
			if (diffs[k] == diffMin){
				res.json(friendData[k]);
				console.log(friendData[k]);
			}
		}

		//Pushing the user's data into the 'friends' array. Big Data will consume all.
		friendData.push(req.body);
	});

	//Clears the array when you submit a POST to /api/clear
	app.post("/api/clear", function(){
		friendData = [];
	});
};