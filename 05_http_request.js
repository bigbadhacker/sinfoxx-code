var http = require('http');

var req = http.request('http://www.google.pt/');
req.on('response', function(res) {
  
  console.log('response headers:', res.headers);
  
  var responseBody = '';

  res.setEncoding('utf8');

  res.on('data', function(d) {
    responseBody += d;
  });

  res.once('end', function() {
    console.log('response full body:', responseBody);
  });
  
});

req.end();