import { hasExtraItems } from './hasExtraItems';

describe('hasExtraItems', () => {
  describe('by default', () => {
    it('should return false if the array has less than nine items', () => {
      const testCases = [[], [1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8]];
      testCases.forEach(testCase => {
        const actual = hasExtraItems(testCase);
        expect(actual).toBe(false);
      });
    });

    it('should return false if the array has exactly nine items', () => {
      const testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const actual = hasExtraItems(testCase);
      expect(actual).toBe(false);
    });

    it('should return true if the array has more than nine items', () => {
      const testCases = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      ];
      testCases.forEach(testCase => {
        const actual = hasExtraItems(testCase);
        expect(actual).toBe(true);
      });
    });
  });

  describe('if `shouldCompareSix` is true', () => {
    it('should return false if the array has less than six items', () => {
      const testCases = [[], [1, 2, 3], [1, 2, 3, 4, 5]];
      testCases.forEach(testCase => {
        const actual = hasExtraItems(testCase, true);
        expect(actual).toBe(false);
      });
    });

    it('should return false if the array has exactly six items', () => {
      const testCase = [1, 2, 3, 4, 5, 6];
      const actual = hasExtraItems(testCase, true);
      expect(actual).toBe(false);
    });

    it('should return true if the array has more than six items', () => {
      const testCases = [
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      ];
      testCases.forEach(testCase => {
        const actual = hasExtraItems(testCase, true);
        expect(actual).toBe(true);
      });
    });
  });
});
