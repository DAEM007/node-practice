const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content-type
    res.setHeader('content-type', 'text/html');

    // create a simple routing system
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err.message);
            res.end();
        }
        res.write(data);
        res.end;
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});

