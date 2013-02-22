var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('tic', function() {
  console.log('tic');
});

emitter.on('tac', function() {
  console.log('tac');
});

var tic = true;
setInterval(function() {
  if (tic) emitter.emit('tic');
  else emitter.emit('tac');
  tic = ! tic;
}, 1000);