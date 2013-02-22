var net = require('net');

var server = net.createServer();

server.on('connection', function(stream) {
  stream.pipe(stream);
});

server.listen(8080);