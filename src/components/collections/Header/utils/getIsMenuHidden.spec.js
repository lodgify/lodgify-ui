import { getIsMenuHidden } from './getIsMenuHidden';

describe('getIsMenuHidden', () => {
  describe('if `menuWidth` is less than or equal to `navigationItemsWidth` plus the minimum logo spacing', () => {
    it('should return `true`', () => {
      const testCases = [
        { menuWidth: 0, navigationItemsWidth: 0 },
        { menuWidth: 250, navigationItemsWidth: 0 },
      ];

      testCases.forEach(({ menuWidth, navigationItemsWidth }) => {
        const actual = getIsMenuHidden(menuWidth, navigationItemsWidth);

        expect(actual).toBe(true);
      });
    });
  });

  describe('if `menuWidth` is more than `navigationItemsWidth` plus the minimum logo spacing', () => {
    it('should return `false`', () => {
      const actual = getIsMenuHidden(1000, 0);

      expect(actual).toBe(false);
    });
  });
});
