import { getIsSubmitButtonDisabled } from './getIsSubmitButtonDisabled';

describe('getIsSubmitButtonDisabled', () => {
  describe('if any input has an error', () => {
    it('should return `true`', () => {
      const inputsState = {
        one: {},
        two: {},
        three: { error: true },
      };
      const actual = getIsSubmitButtonDisabled(inputsState);

      expect(actual).toBe(true);
    });
  });

  describe('if no input has an error', () => {
    it('should return `false`', () => {
      const inputsState = {
        one: {},
        two: {},
        three: {},
      };
      const actual = getIsSubmitButtonDisabled(inputsState);

      expect(actual).toBe(false);
    });
  });
});
