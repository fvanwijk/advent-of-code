const f = require('../helpers').getFileSync('1');

const input = f.split('\n');
let found = false;
let sum = 0;
let keys = {};

function repeat() {
  for (i = 0; i < input.length; i++) {
    sum = sum + +input[i];
    if (keys[sum]) {
      found = true;
      break;
    }
    keys[sum] = true;
  }
}

while (!found) {
  repeat();
}

console.log('Part 1:', input.reduce((a, b) => +b + a, 0));
console.log('Part 2:', sum);
