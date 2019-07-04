import { getIsTopComponentVisible } from './getIsTopComponentVisible';

describe('getIsVisible', () => {
  describe('when boundingClientRect coordinates are inside the windowHeight', () => {
    it('should return true', () => {
      const actual = getIsTopComponentVisible(
        { top: 50, bottom: 100, height: 50 },
        1000
      );

      expect(actual).toBe(true);
    });
  });

  describe('when boundingClientRect coordinates are outside the windowHeight', () => {
    it('should return false', () => {
      const actual = getIsTopComponentVisible(
        { top: -1100, bottom: -1300, height: 200 },
        1000
      );

      expect(actual).toBe(false);
    });
  });

  describe('when top offset is zero', () => {
    it('should return false', () => {
      const actual = getIsTopComponentVisible({ top: 0 }, 1000);

      expect(actual).toBe(false);
    });
  });
});
