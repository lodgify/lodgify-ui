import { getFocusedInput } from './getFocusedInput';

describe('getFocusedInput', () => {
  describe('if `controlledFocusedInput` is `undefined`', () => {
    it('should return `uncontrolledFocusedInput`', () => {
      const uncontrolledFocusedInput = 'summin';
      const actual = getFocusedInput(undefined, uncontrolledFocusedInput);

      expect(actual).toBe(uncontrolledFocusedInput);
    });
  });

  describe('if `controlledFocusedInput` is a string or null', () => {
    it('should return `controlledFocusedInput`', () => {
      const testCases = [null, 'worms'];

      testCases.forEach(controlledFocusedInput => {
        const actual = getFocusedInput(controlledFocusedInput, 'summin');

        expect(actual).toBe(controlledFocusedInput);
      });
    });
  });
});
