let direction = 0; // 0 = right, 1 = up, 2 = left, 3 = down
let maxStepsPerDirection = -1;
let j = 0;
const grid = new Array(15).fill().map(_ => new Array(15).fill().map(x => '.'));

const res = new Array(0).fill().reduce((step, _, i) => {
  j++;


  if (j > maxStepsPerDirection) {
    direction = (direction + 1) % 4;
    j = 0;

    if (direction % 2 === 0) {
      maxStepsPerDirection++;
    }
  }

  step[direction]++;

  grid[step[1]-step[3]+10][step[2]-step[0]+10] = i+2+'';
  console.log(step);
  return step;
}, [0, 0, 0, 0]);

console.log(Math.abs(res[0] - res[2]) + Math.abs(res[1] - res[3]) - 1);
console.log(grid);