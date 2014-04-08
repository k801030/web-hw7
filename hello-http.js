var port = 8000;

var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.write("hello world\n");
	res.end("IP:"+res.connection.remoteAddress);

});

server.listen(port);

console.log("server running at http://120.0.0.1:"+port+"/")
var referer = req.headers['referer'];
console.log("referer:"+referer);