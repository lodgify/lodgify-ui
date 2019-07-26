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

  describe('if `element.offsetParent` is `null` or `undefined`', () => {
    it('should return `false`', () => {
      const testCases = [{ offsetParent: null }, { offsetParent: undefined }];

      testCases.forEach(testCase => {
        const actual = getIsVisible(testCase);

        expect(actual).toBe(false);
      });
    });
  });

  describe('if `element.offsetParent` is defined', () => {
    it('should return `true`', () => {
      const actual = getIsVisible({ offsetParent: '👨' });

      expect(actual).toBe(true);
    });
  });
});
