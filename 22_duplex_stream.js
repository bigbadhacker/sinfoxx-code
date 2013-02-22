var net = require('net');

var server = net.createServer();

server.on('connection', function(stream) {
  stream.setEncoding('utf8');

  console.log('new connection');
  
  stream.on('data', function(d) {
    stream.write(d.toUpperCase());
    if (d.toLowerCase() == 'quit\n') {
      stream.end('Bye bye!');
    }
  });

});

server.listen(8080);