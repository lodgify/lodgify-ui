import { getBoundryRange } from './getBoundryRange';

describe('getBoundryRange', () => {
  describe('if `isShowingPageNumbers` is true', () => {
    it('should return the correct value', () => {
      const actual = getBoundryRange(true);

      expect(actual).toBe(1);
    });
  });

  describe('if `isShowingPageNumbers` is false', () => {
    it('should return the correct value', () => {
      const actual = getBoundryRange(false);

      expect(actual).toBe(10);
    });
  });
});
