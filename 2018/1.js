const f = require('../helpers').getFileSync('1');

const input = f.split('\n');
let sum = 0;
let keys = {};

let i = 0;
while (true) {
  sum = sum + +input[i % input.length];
  if (keys[sum]) {
    break;
  }
  keys[sum] = true;
  i++;
}

console.log('Part 1:', input.reduce((a, b) => +b + a, 0));
console.log('Part 2:', sum);
