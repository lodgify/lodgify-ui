import { getIsVisible } from './getIsVisible';

describe('getIsVisible', () => {
  describe('if `element` is `null` or `undefined`', () => {
    it('should return `false`', () => {
      const testCases = [null, undefined];

      testCases.forEach(testCase => {
        const actual = getIsVisible(testCase);

        expect(actual).toBe(false);
      });
    });
  });

  describe('if `element.offSetParent` is `null` or `undefined`', () => {
    it('should return `false`', () => {
      const testCases = [{ offSetParent: null }, { offSetParent: undefined }];

      testCases.forEach(testCase => {
        const actual = getIsVisible(testCase);

        expect(actual).toBe(false);
      });
    });
  });

  describe('if `element.offSetParent` is defined', () => {
    it('should return `true`', () => {
      const actual = getIsVisible({ offSetParent: '👨' });

      expect(actual).toBe(true);
    });
  });
});
