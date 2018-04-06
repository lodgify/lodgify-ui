import { hasMoreThanNineItems } from './hasMoreThanNineItems';

describe('hasMoreThanNineItems', () => {
  it('should return false if the array has less than nine items', () => {
    const testCases = [[], [1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8]];
    testCases.forEach(testCase => {
      const actual = hasMoreThanNineItems(testCase);
      expect(actual).toBe(false);
    });
  });

  it('should return false if the array has exactly nine items', () => {
    const testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actual = hasMoreThanNineItems(testCase);
    expect(actual).toBe(false);
  });

  it('should return true if the array has more than nine items', () => {
    const testCases = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    ];
    testCases.forEach(testCase => {
      const actual = hasMoreThanNineItems(testCase);
      expect(actual).toBe(true);
    });
  });
});
