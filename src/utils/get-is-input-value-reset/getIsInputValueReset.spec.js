import { getIsInputValueReset } from './getIsInputValueReset';

describe('getIsInputValueReset', () => {
  describe('if `previousValue` is `null` or `undefined`', () => {
    it('should return `false`', () => {
      const testCases = [null, undefined];

      testCases.forEach(testCase => {
        const actual = getIsInputValueReset(testCase);

        expect(actual).toBe(false);
      });
    });
  });

  describe('if `value` is not `null`', () => {
    it('should return `false`', () => {
      const testCases = [1, undefined, ''];

      testCases.forEach(testCase => {
        const actual = getIsInputValueReset(0, testCase);

        expect(actual).toBe(false);
      });
    });
  });

  describe('in any other case', () => {
    it('should return `true`', () => {
      const actual = getIsInputValueReset(0, null);

      expect(actual).toBe(true);
    });
  });
});
