var fs = require('fs');

var fileName = __dirname + '/04_chain_callbacks.js';
fs.exists(fileName, function(exists) {
  
  if (!exists) throw new Error('File does not exist');

  fs.readFile(fileName, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });
});