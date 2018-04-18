#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('IoT API Engine\n');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
