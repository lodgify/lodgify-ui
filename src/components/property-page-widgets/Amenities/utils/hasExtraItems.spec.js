import { hasExtraItems } from './hasExtraItems';

describe('hasExtraItems', () => {
  describe('by default', () => {
    it('should return false if the array has less than five items', () => {
      const testCases = [[], [1, 2, 3], [1, 2, 3, 4]];
      testCases.forEach(testCase => {
        const actual = hasExtraItems(testCase);
        expect(actual).toBe(false);
      });
    });

    it('should return false if the array has exactly five items', () => {
      const testCase = [1, 2, 3, 4, 5];
      const actual = hasExtraItems(testCase);
      expect(actual).toBe(false);
    });

    it('should return true if the array has more than five items', () => {
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

  describe('if `shouldCompareThree` is true', () => {
    it('should return false if the array has less than three items', () => {
      const testCases = [[], [1], [1, 2]];
      testCases.forEach(testCase => {
        const actual = hasExtraItems(testCase, true);
        expect(actual).toBe(false);
      });
    });

    it('should return false if the array has exactly three items', () => {
      const testCase = [1, 2, 3];
      const actual = hasExtraItems(testCase, true);
      expect(actual).toBe(false);
    });

    it('should return true if the array has more than three items', () => {
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
