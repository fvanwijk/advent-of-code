import { getFileSync } from '../src/helpers';
import { solveA, solveB } from './1';
const input = getFileSync(__dirname, '1');

describe('Day 1', () => {
  describe('A', () => {
    it('should solve examples', () => {
      expect(solveA('12')).toEqual(2);
      expect(solveA('14')).toEqual(2);
      expect(solveA('1969')).toEqual(654);
      expect(solveA('100756')).toEqual(33583);
      expect(solveA('100756')).toEqual(33583);
    });

    it('should solve with input', () => {
      expect(solveA(input)).toEqual(3234871);
    });
  });

  describe('B', () => {
    it('should solve examples', () => {
      expect(solveB('14')).toEqual(2);
      expect(solveB('1969')).toEqual(966);
      expect(solveB('100756')).toEqual(50346);
    });

    it('should solve with input', () => {
      expect(solveB(input)).toEqual(4849444);
    });
  });
});
