import { getControlledInputValue } from './getControlledInputValue';

describe('getControlledInputValue', () => {
  describe('if `controlledValue` is `undefined`', () => {
    it('should return `value`', () => {
      const VALUE = '🎸';
      const actual = getControlledInputValue(undefined, undefined, VALUE);

      expect(actual).toBe(VALUE);
    });
  });

  describe('if `controlledValue` is `null`', () => {
    it('should return `value`', () => {
      const INITIAL_VALUE = '🍈';
      const actual = getControlledInputValue(null, INITIAL_VALUE);

      expect(actual).toBe(INITIAL_VALUE);
    });
  });

  describe('if `controlledValue` not `null` or `undefined`', () => {
    it('should return `controlledValue`', () => {
      const testCases = ['', 'yo', 0, 1, [], false, true, {}];

      testCases.forEach(testCase => {
        const actual = getControlledInputValue(testCase);

        expect(actual).toBe(testCase);
      });
    });
  });
});
