import { getIsValidError } from './getIsValidError';

describe('getIsValidError', () => {
  describe('if `value` is falsy', () => {
    it('should return `false`', () => {
      const testCases = ['', 0, undefined];

      testCases.forEach(testCase => {
        const actual = getIsValidError(testCase, false);

        expect(actual).toBe(false);
      });
    });
  });

  describe('if `value` is truthy', () => {
    const testCases = ['yo', 1, {}, []];

    describe('and `isValid` is not `false`', () => {
      it('should return `false`', () => {
        testCases.forEach(testCase => {
          const actual = getIsValidError(testCase, true);

          expect(actual).toBe(false);
        });
      });
    });

    describe('and `isValid` is `false`', () => {
      describe('and `invalidMessage` is falsy', () => {
        it('should return `true`', () => {
          testCases.forEach(testCase => {
            const actual = getIsValidError(testCase, false);

            expect(actual).toBe(true);
          });
        });
      });

      describe('and `invalidMessage` is truthy', () => {
        it('should return `invalidMessage`', () => {
          const invalidMessage = '🏥';

          testCases.forEach(testCase => {
            const actual = getIsValidError(testCase, false, invalidMessage);

            expect(actual).toBe(invalidMessage);
          });
        });
      });
    });
  });
});
