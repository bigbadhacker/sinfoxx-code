var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/20_read_stream.js',
  {bufferSize: 20});

readStream.setEncoding('utf8');

readStream.on('data', function(d) {
  console.log('data:', d);
});