const { connect } = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = function(key) {
  if (key === ('\u0003')) {
    process.exit(console.log('Snake game over'));
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput)) 

  return stdin;
}

setupInput();
