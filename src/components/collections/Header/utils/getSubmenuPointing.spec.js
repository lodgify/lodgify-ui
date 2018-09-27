import { getSubmenuPointing } from './getSubmenuPointing';

describe('getSubmenuPointing', () => {
  describe('if menu item is first in navigation list', () => {
    it('should return `top left`', () => {
      const navigationSize = 5;
      const currentItemIndex = 0;
      const hasFinalCTA = false;

      const actual = getSubmenuPointing(
        currentItemIndex,
        navigationSize,
        hasFinalCTA
      );

      expect(actual).toBe('top left');
    });
  });

  describe('if menu item is last in navigation list', () => {
    it('should return `top right`', () => {
      const navigationSize = 5;
      const currentItemIndex = 4;
      const hasFinalCTA = false;

      const actual = getSubmenuPointing(
        currentItemIndex,
        navigationSize,
        hasFinalCTA
      );

      expect(actual).toBe('top right');
    });
  });

  describe('if menu item is last in navigation list and has a final CTA', () => {
    it('should return `top left`', () => {
      const navigationSize = 5;
      const currentItemIndex = 4;
      const hasFinalCTA = true;

      const actual = getSubmenuPointing(
        currentItemIndex,
        navigationSize,
        hasFinalCTA
      );

      expect(actual).toBe('top left');
    });
  });
});
