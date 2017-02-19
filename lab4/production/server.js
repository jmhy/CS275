//Using express to simplify handling of different client reqs
var express = require('express');
var http = require('http');
var app = express();

//import the calculator module
var calc = require('./calculator');
var c = new calc();

//import the weather module
var WeatherController = require('./weather');
var wc = new WeatherController();

//refer to local dir, change if moving this script to another dir
app.use(express.static("."));

//send html for calculation page to client
app.get('/calc', function (req,res){
	var html_str = c.render();
	console.log("Rendering calculation page");
	res.send(html_str);
})

//process a factorial request
app.get('/fact', function (req,res){
	var seed = req.query.seed;
	console.log("Factorial request, seed is " + seed);
	//check for valid input
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
		//Call the fact function from the module
		var result = c.fact(seed);
		console.log("Sending factorial result: " + result + "\n");
		res.send("The factorial of " + seed + " is " + result);
	}
})

//process a summation request
app.get('/sum', function (req,res){
	var seed = req.query.seed;
	console.log("Summation request, seed is " + seed);
	//check for valid input
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
		//Call the sum function from the module
		var result = c.sum(seed);
		console.log("Sending summation result: " + result + "\n");
		res.send("The summation of " + seed + " is " + result);
	}
})

//send html for weather page to client
app.get('/weather', function (req,res){
	var html_str = wc.render();
	console.log("Rendering weather page");
	res.send(html_str);
})

//send weather forecast data as html to client
app.get('/getWeather', function (req,res){
	//first obtain zip from wunderground
	wc.once('zipEvent', function(zip){
		//with zip, request forecast data from wunderground
		wc.once('forecastEvent', function(msg){
			res.send(msg);
		});
		wc.getWeather(zip);
	});
	wc.getZip();
})

//Any other URL request will redirect to the main page
app.get('*',function (req, res) {
	res.redirect('./index.html');
});

//Have the server listen to port 8080
app.listen(8080,function(){
	console.log('Server Running');
});

//returns true if value is an integer
function isInt(value) {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}