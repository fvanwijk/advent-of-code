export function solveA(input: string): number {
  const list = input.split('\n');
  return list
    .filter(i => i !== '')
    .map(item => calcFuel(+item))
    .reduce((a, b) => a + b, 0);
}

export function solveB(input: string): number {
  const list = input.split('\n');
  return list
    .filter(i => i !== '')
    .map(item => {
      let fuel = calcFuel(+item);
      let total = fuel;

      while (fuel > 0) {
        fuel = calcFuel(fuel);
        total += Math.max(0, fuel);
      }
      return total;
    })
    .reduce((a, b) => a + b, 0);
}

function calcFuel(mass: number) {
  return Math.floor(+mass / 3) - 2;
}
