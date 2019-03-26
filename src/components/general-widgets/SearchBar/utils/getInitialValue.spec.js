import { getInitialValue } from './getInitialValue';

describe('getInitialValue', () => {
  describe('if `value` is `undefined`', () => {
    it('should return `null`', () => {
      const actual = getInitialValue();

      expect(actual).toBe(null);
    });
  });

  describe('if `value` is anything other than `undefined`', () => {
    it('should return `value`', () => {
      const testCases = ['', 'a', 0, 1, null, [], {}];

      testCases.forEach(testCase => {
        const actual = getInitialValue(testCase);

        expect(actual).toBe(testCase);
      });
    });
  });
});
