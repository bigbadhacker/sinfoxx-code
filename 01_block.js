setTimeout(function() {
  console.log('Hey there!')
}, 1000);

console.log('timeout is set, should fire in one second...');

var counter = 0;
while(true) {
  counter ++;
  if (counter % 10000000 === 0) console.log(counter);
}