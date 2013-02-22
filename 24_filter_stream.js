/// --- Filter Stream

var Stream = require('stream');

var upper = new Stream();

upper.writable = upper.readable = true;

upper.write = function(d) {
  upper.emit('data', d.toString().toUpperCase());
};


/// --- TCP Server

var server = require('net').createServer();

server.on('connection', function(stream) {
  stream.
    pipe(upper).
    pipe(stream);

  stream.on('data', function(d) {
    if (d.toString().toLowerCase() === 'quit\n') stream.end();
  });

});

server.listen(8080);