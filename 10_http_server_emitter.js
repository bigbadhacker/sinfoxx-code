var http = require('http');

var port = 8080;

var server = http.createServer();

server.once('listening', function() {
  console.log('server is listening on port', port);
});

server.once('close', function() {
  console.log('server is closed');
});

var requests = 0;
var closing = false;

server.on('request', function(req, res) {
  res.end('Bye bye!');
  requests ++;
  if (requests > 2 && ! closing) {
    console.log('closing...');
    closing = true;
    server.close();
  }
});

server.on('error', function(err) {
  console.error(err);
});

server.listen(port);