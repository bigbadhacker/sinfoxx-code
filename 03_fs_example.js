var fs = require('fs');

fs.readFile(__dirname + '/03_fs_example.js', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});