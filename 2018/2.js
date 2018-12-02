const h = require('../helpers');
const f = h.getFileSync('2');

const input = f.split('\n');

const eq = input.reduce(
  (coefficients, l) => {
    const letterCounts = l
      .split('')
      .reduce((mem, c) => h.increment(mem, c, 1), {});

    const counts = Object.values(letterCounts).reduce(
      (mem, count) => {
        return {
          two: mem.two || +(count === 2),
          three: mem.three || +(count === 3)
        };
      },
      { two: 0, three: 0 }
    );

    return [(coefficients[0] += counts.two), (coefficients[1] += counts.three)];
  },
  [0, 0]
);

console.log('Part 1:', eq.reduce((a, b) => a * b));
