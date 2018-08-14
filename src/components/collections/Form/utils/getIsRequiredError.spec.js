import { getIsRequiredError } from './getIsRequiredError';

describe('getIsRequiredError', () => {
  describe('if `validation.isRequired` is falsy', () => {
    it('should return the value of `validation.isRequired`', () => {
      const testCases = [undefined, false];

      testCases.forEach(testCase => {
        const actual = getIsRequiredError({ isRequired: testCase });

        expect(actual).toBe(testCase);
      });
    });
  });

  describe('if `validation.isRequired` is `true`', () => {
    it('should return the return value of `validation.getIsEmpty``', () => {
      const returnValue = '💌';
      const getIsEmpty = () => returnValue;
      const actual = getIsRequiredError({ getIsEmpty, isRequired: true });

      expect(actual).toBe(returnValue);
    });

    it('should pass `inputState.value` to `getIsEmpty`', () => {
      const value = '💰';
      const getIsEmpty = value => value;
      const actual = getIsRequiredError(
        { getIsEmpty, isRequired: true },
        { value }
      );

      expect(actual).toBe(value);
    });
  });

  describe('if `inputState` is `undefined`', () => {
    it('should not break', () => {
      expect(() => getIsRequiredError({}, undefined)).not.toThrow();
    });
  });
});
