var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let filename;

    if (req.url === '/about' || req.url === '/contact-me') {
        filename = './' + 'w3SchoolProject' + req.url + '.html';
    } else if (req.url == null) {
        filename = './w3SchoolProject/index.html'
    } else {
        filename = './w3SchoolProject/404.html'
    }

    fs.readFile(filename, function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found!!!");
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);