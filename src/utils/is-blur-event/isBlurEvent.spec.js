import { isBlurEvent } from './isBlurEvent';

describe('isBlurEvent', () => {
  describe('if `prevFocusedInput` is falsy', () => {
    it('should return `false`', () => {
      const testCases = [null, false];

      testCases.forEach(testCase => {
        const actual = isBlurEvent(testCase);

        expect(actual).toBe(false);
      });
    });
  });

  describe('if `prevFocusedInput` is truthy', () => {
    describe('if `focusedInput` is truthy', () => {
      it('should return `false`', () => {
        const testCases = ['someInput', true];

        testCases.forEach(testCase => {
          const actual = isBlurEvent('truthy', testCase);

          expect(actual).toBe(false);
        });
      });
    });

    describe('if `focusedInput` is falsy', () => {
      it('should return `false`', () => {
        const testCases = [null, false];

        testCases.forEach(testCase => {
          const actual = isBlurEvent('truthy', testCase);

          expect(actual).toBe(true);
        });
      });
    });
  });
});
