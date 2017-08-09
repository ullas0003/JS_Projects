var http = require("http");
var port = 8081;
http.createServer(function(req,res){
	res.writeHead(200, {"type":"html"});
	res.end("<a href = 'ullas.html' >ullas<a/><h1>test node</h1>");
	
}).listen(port);



console.log("running on port "+port);