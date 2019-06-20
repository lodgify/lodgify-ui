import { getSiblingRange } from './getSiblingRange';

describe('getSiblingRange', () => {
  describe('if `isShowingPageNumbers` is true', () => {
    it('should return the correct value', () => {
      const actual = getSiblingRange(true);

      expect(actual).toBe(0);
    });
  });

  describe('if `isShowingPageNumbers` is false', () => {
    it('should return the correct value', () => {
      const actual = getSiblingRange(false);

      expect(actual).toBe(undefined);
    });
  });
});
