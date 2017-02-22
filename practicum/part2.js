var express = require('express');
var http = require('http');
var app = express();

app.use(express.static("."));

app.get('/part1', function (req,res){
	res.send('./jmh463_part1.html');
})

app.get('/part2', function (req,res){
	var message = req.query.message;
	var count = req.query.count;
	var myResponse = '';
	for(i=0; i<count; i++){
		myResponse += message;
	}
	res.send(myResponse);
})

app.listen(8080,function(){
	console.log('Server Running');
});