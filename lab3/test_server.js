// needed to be able to fulfill HTTP requests
var http = require('http');

// create the instance of a server
var server = http.createServer(function(req, res) {
	// return OK status (200)
	res.writeHead(200, {'content-type': 'text/plain'});
	// message to provide to user (in browser)
	res.end('Hello Http\n');
});

// port upon which the server will listen for incoming traffic
// for example: http://localhost:8080
server.listen(8080);
console.log('Server setup complete');
console.log('Press Ctrl+C to kill process');