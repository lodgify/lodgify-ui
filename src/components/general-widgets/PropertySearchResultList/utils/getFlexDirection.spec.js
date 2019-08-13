import { getFlexDirection } from './getFlexDirection';

describe('getFlexDirection', () => {
  describe('if `isUserOnMobile === true`', () => {
    it('should return the correct value', () => {
      const actual = getFlexDirection(true);

      expect(actual).toBe('column');
    });
  });

  describe('if `isUserOnMobile === false`', () => {
    it('should return the correct value', () => {
      const actual = getFlexDirection(false);

      expect(actual).toBe(undefined);
    });
  });
});
