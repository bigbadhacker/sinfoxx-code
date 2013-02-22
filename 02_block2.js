setTimeout(function() {
  var counter = 0;
  while(true) {
    counter ++;
    if (counter % 10000000 === 0) console.log(counter);
  }  
}, 1000);

setTimeout(function() {
  console.log('Hey there');
}, 1000);

console.log('timeouts are set, should fire in one second...');