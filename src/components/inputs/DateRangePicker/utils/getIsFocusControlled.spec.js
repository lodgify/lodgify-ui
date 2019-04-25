import { getIsFocusControlled } from './getIsFocusControlled';

describe('getIsFocusControlled', () => {
  describe('if `propsFocusedInput` is `undefined`', () => {
    it('should return `false`', () => {
      const actual = getIsFocusControlled(undefined);

      expect(actual).toBe(false);
    });
  });

  describe('if `propsFocusedInput` is a string or `null`', () => {
    it('should return `true`', () => {
      const testCases = ['', 'a', null];

      testCases.forEach(testCase => {
        const actual = getIsFocusControlled(testCase);

        expect(actual).toBe(true);
      });
    });
  });
});
