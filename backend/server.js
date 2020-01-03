const http = require('http');
const url = require('url');
const fs = require('fs');

let app = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    console.log(`url -> ${q.pathname}`);
    console.log(`filename -> ${filename}`);

    if(q.pathname === '/') {
        fs.readFile('./index.html', (err, data) => {

            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);

console.log("server started port: 8080");
