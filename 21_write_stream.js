var fs = require('fs');

var writeStream = fs.createWriteStream(__dirname + '/out.txt');

var stopAt = Date.now() + 10000;

var interval = setInterval(function() {
  writeStream.write(Date.now());  
  
  if (Date.now() > stopAt) {
    writeStream.end();
    clearInterval(interval);
  }
}, 1000);