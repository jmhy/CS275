//Using express to simplify handling of different client reqs
var express = require('express');
var http = require('http');
var app = express();

//refer to local dir, change if moving this script to another dir
app.use(express.static("."));

//process a factorial request
app.get('/fact', function (req,res){
	var seed = req.query.seed;
	console.log("Factorial request, seed is " + seed);
	
	if(seed == ""){
		res.send("Enter the seed first!");
	}
	else if(!isInt(seed)){
		res.send("Input not an integer!");
	}
	else if(seed < 0){
		res.send("Input must be positive integer!");
	}
	else{
		var result = 1;
		for(i=1; i<=seed; i++){
			result *= i;
		}
		console.log("Sending factorial result: " + result + "\n");
		res.send("The factorial of " + seed + " is " + result);
	}
})

//process a summation request
app.get('/sum', function (req,res){
	var seed = req.query.seed;
	console.log("Summation request, seed is " + seed);
	
	if(seed == ""){
		res.send("Enter the seed first!");
	}
	else if(!isInt(seed)){
		res.send("Input not an integer!");
	}
	else if(seed < 0){
		res.send("Input must be positive integer!");
	}
	else{
		var result = 0;
		for(i=0; i<=seed; i++){
			result += i;
		}
		console.log("Sending summation result: " + result + "\n");
		res.send("The summation of " + seed + " is " + result);
	}
})

//Any other URL request will redirect to the main --and only-- page
app.get('*',function (req, res) {
	res.redirect('./jmh463_lab3.html');
});

//Have the server listen to port 8080
app.listen(8080,function(){
	console.log('Server Running');
});

//returns true if value is an integer
function isInt(value) {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}