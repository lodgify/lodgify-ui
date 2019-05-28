import { getWillLocationDropdownOpenAbove } from './getWillLocationDropdownOpenAbove';

describe('getWillLocationDropdownOpenAbove', () => {
  describe('if `element` is `undefined` or `null`', () => {
    it('should return `defaultValue`', () => {
      const testCases = [undefined, null];
      const defaultValue = 'sooooome value';

      testCases.forEach(testCase => {
        const actual = getWillLocationDropdownOpenAbove(testCase, defaultValue);

        expect(actual).toBe(defaultValue);
      });
    });
  });

  describe('if `element.getBoundingClientRect` is `undefined`', () => {
    it('should return `defaultValue`', () => {
      const defaultValue = 'sooooome value';

      const actual = getWillLocationDropdownOpenAbove({}, defaultValue);

      expect(actual).toBe(defaultValue);
    });
  });

  describe('if `element.getBoundingClientRect().top` is greater than 450', () => {
    it('should return `true`', () => {
      const element = {
        getBoundingClientRect: () => ({ top: 451 }),
      };

      const actual = getWillLocationDropdownOpenAbove(element);

      expect(actual).toBe(true);
    });
  });

  describe('if `element.getBoundingClientRect().top` is less than 450', () => {
    it('should return `true`', () => {
      const element = {
        getBoundingClientRect: () => ({ top: 449 }),
      };

      const actual = getWillLocationDropdownOpenAbove(element);

      expect(actual).toBe(false);
    });
  });
});
