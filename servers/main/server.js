var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
const root = "/";


function getFile(file,resp) {
   fs.readFile(file,function (err,data) {
      if (err) {
         console.log(err);
         resp.writeHead(404,{'Content-Type': 'text/html'});
      }
      else {
         resp.writeHead(200,{'Content-Type': 'text/html'});
         response.write(data.toString());
      }
   })
}

http.createServer(function (req, res) {
   var host = url.parse(req.url,true).host;
   var pathname = url.parse(req.url,true).pathname.toLowerCase();
   var args = url.parse(req.url,true).search;
   getFile(pathname,res);
   res.end();
}).listen(80);

console.log('Server running at http://127.0.0.1:80/');
