const h = require('../helpers');
const f = h.getFileSync('3');

const input = f.split('\n');
const res = input.reduce(
  ({ count, ids }, l) => {
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

        if (count[key]) {
          count[key].c++;
        } else {
          count[key] = { id, key, c: 1 };
        }
      }
    }

    ids[id] = +width * +height;

    return { count, ids };
  },
  { count: {}, ids: {} }
);

const counts = Object.values(res.count);
const countOverlaps = counts.filter(d => d.c > 1).length;
const noOverlapCountPerId = counts.reduce(
  (mem, d) => h.increment(mem, d.id, d.c === 1 ? 1 : 0),
  {}
);

console.log('Part 1:', countOverlaps);

for (key in noOverlapCountPerId) {
  if (noOverlapCountPerId[key] === res.ids[key]) {
    console.log('Part 2', key);
  }
}
