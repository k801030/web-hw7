var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var port = 8001;

var server = http.createServer(function(req, res){
	console.log("connection..");
	var path = url.parse(req.url).pathname;
	path = path.slice(1);
	console.log(path);
	switch(path){
		case '':
			res.writeHead(200, {"Content-Type":"text/html"});
			res.write("hello world\n");
			res.end("");
			break;
		case '/fiboCount.html':
			fs.readFile( 'fiboCount.html', function(error, data){
				if(error){
					res.writeHead(404);
					res.write("opps this doesn't exist - 404");
				}else{
					res.writeHead(200, {"Content-Type":"text/html"});
					// {"Content-Type":"text/html"} 會造成限制
					res.write(data, "utf8");
				}
				res.end();
			});
			break;
   		default:
      		fs.readFile( path, function(error, data){
				if(error){
					res.writeHead(404);
					res.write("opps this doesn't exist - 404");
				}else{
					res.writeHead(200);
					res.write(data, "utf8");
				}
				res.end();
			});

      		break;
	}



});

server.listen(port);
console.log("server running at http://120.0.0.1:"+port+"/")

