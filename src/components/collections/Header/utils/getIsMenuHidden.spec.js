import { getIsMenuHidden } from './getIsMenuHidden';

describe('getIsMenuHidden', () => {
  describe('if `menuWidth` minus the header padding is less than or equal to `navigationItemsWidth` plus the `logoWidth`', () => {
    it('should return `true`', () => {
      const testCases = [
        { menuWidth: 0, navigationItemsWidth: 0, logoWidth: 0 },
        { menuWidth: 250, navigationItemsWidth: 200, logoWidth: 100 },
      ];

      testCases.forEach(({ menuWidth, navigationItemsWidth, logoWidth }) => {
        const actual = getIsMenuHidden(
          menuWidth,
          navigationItemsWidth,
          logoWidth
        );

        expect(actual).toBe(true);
      });
    });
  });

  describe('if `menuWidth` minus the header padding is more than the `navigationItemsWidth` plus the `logoWidth`', () => {
    it('should return `false`', () => {
      const actual = getIsMenuHidden(1000, 0);

      expect(actual).toBe(false);
    });
  });
});
