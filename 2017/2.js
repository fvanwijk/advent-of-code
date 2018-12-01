const comb = require('js-combinatorics');

require('./helpers.js').getFile('2', (file) => {
  const lines = file.split('\n');

  const res = lines.reduce((sum, line) => {
    const max = line.split('\t').reduce((a, b) => Math.max(a,+b));
    const min = line.split('\t').reduce((a, b) => Math.min(a,+b));
    return sum + max - min;
  }, 0);

  console.log('Day 2a', res);

  const res2 = lines.reduce((sum, line) => {
    const combs = comb.combination(line.split('\t'), 2);
    while(x = combs.next()) {
      if (x[0] % x[1] === 0) {
        sum += x[0] / x[1];
      }
      if (x[1] % x[0] === 0) {
        sum += x[1] / x[0];
      }
    }
    return sum;
  }, 0);

  console.log('Day 2b', res2);
});
