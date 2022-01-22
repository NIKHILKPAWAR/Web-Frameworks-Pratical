var http = require('http');  // includes the http module
var uc = require('upper-case'); // include the upper-case module
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(("Hello World!").toUpperCase()); // assign the upper-case module
    res.end();
}).listen(8080);