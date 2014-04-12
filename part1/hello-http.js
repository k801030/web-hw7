var port = 8000;
var regex = /http:\/\/127.0.0.1.*?/;
var referer;
var http = require('http');
var server = http.createServer(function(req, res){
	referer = req.headers['referer'];


	res.writeHead(200, {"Content-Type":"text/plain"});
	res.write("hello world\n");
	res.write("IP:"+res.connection.remoteAddress+"\n");
	res.write("referer:"+referer+"\n");
	if(r_test(regex,referer) == true)
		res.write("regex:true\n");
	else
		res.write("regex:false\n");
	res.end("");

});

server.listen(port);

console.log("server running at http://120.0.0.1:"+port+"/")

console.log("referer:"+referer);

function r_test(regex , s){
	if(s==null)
		return false;
	if(s.match(regex)!=null){
		return true;
	}else{
		return false;
	}
}