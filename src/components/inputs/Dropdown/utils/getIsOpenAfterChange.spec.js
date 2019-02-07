import { getIsOpenAfterChange } from './getIsOpenAfterChange';

describe('getIsOpenAfterChange', () => {
  describe('if `key` is one of `ArrowDown` or `ArrowDown`', () => {
    it('should return `true`', () => {
      const testCases = ['ArrowDown', 'ArrowUp'];

      testCases.forEach(testCase => {
        const actual = getIsOpenAfterChange(testCase);

        expect(actual).toBe(true);
      });
    });
  });

  describe('if `key` is anything else', () => {
    it('should return `false`', () => {
      const testCases = [
        'Arrow Left',
        'Enter',
        'Something else',
        false,
        undefined,
      ];

      testCases.forEach(testCase => {
        const actual = getIsOpenAfterChange(testCase);

        expect(actual).toBe(false);
      });
    });
  });
});
