var express = require("express"),
	app = express(),
	http = require("http"),
	server = http.createServer(app),
	io = require("socket.io").listen(server);
	port = 8000;
server.listen(port);
console.log('Server running');
