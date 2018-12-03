const h = require('../helpers');
const f = h.getFileSync('3');

const input = f.split('\n');
const res = input.reduce((mem, l) => {
  const [
    match,
    id,
    left,
    top,
    width,
    height
  ] = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/g.exec(l);

  for (let i = +left; i < +left + +width; i++) {
    for (let j = +top; j < +top + +height; j++) {
      let key = `${i}-${j}`;

      h.increment(mem, key, 1);
    }
  }

  return mem;
}, {});

const countOverlaps = Object.values(res).filter(d => d > 1).length;

console.log('Part 1:', countOverlaps);
