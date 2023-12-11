var http = require("http");

http.createServer(function(request,response){
    response.writeHead(200,{'content-Type': 'text/plain'});

    response.end('AJAY 7376222IT106\n');
}).listen(3100);

console.log('server running at http://127.0.0.1:3100/');