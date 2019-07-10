import { getMaxWidth } from './getMaxWidth';

describe('getMaxWidth', () => {
  describe('if `isFluid` is `true`', () => {
    it('should return `100%`', () => {
      const actual = getMaxWidth(true);

      expect(actual).toBe('100%');
    });
  });

  describe('if `isFluid` is `false`', () => {
    it('should return `640px`', () => {
      const actual = getMaxWidth(false);

      expect(actual).toBe('640px');
    });
  });
});
