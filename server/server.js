var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
   var host = url.parse(req.url,true).host;
   var pathname = '..' + url.parse(req.url,true).pathname;
   var args = url.parse(req.url,true).search;
   
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
}).listen(80);

console.log('Server running at http://127.0.0.1:80/');
