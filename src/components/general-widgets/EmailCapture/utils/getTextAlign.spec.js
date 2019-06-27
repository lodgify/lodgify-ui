import { getTextAlign } from './getTextAlign';
import { MOBILE_ALIGNMENT, LARGE_DEVICE_ALIGNMENT } from './constants';

describe('getTextAlignment', () => {
  describe('`isUserOnMobile` === true', () => {
    it('should return the right string', () => {
      const actual = getTextAlign(true);

      expect(actual).toBe(MOBILE_ALIGNMENT);
    });
  });
  describe('`isUserOnMobile` === false', () => {
    it('should return the right string', () => {
      const actual = getTextAlign(false);

      expect(actual).toBe(LARGE_DEVICE_ALIGNMENT);
    });
  });
});
