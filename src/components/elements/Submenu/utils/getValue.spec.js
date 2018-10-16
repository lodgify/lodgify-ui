import { getValue } from './getValue';

describe('getValue', () => {
  describe('`isSelectedDisabled`', () => {
    it('should return an object with value if isSelectedDisabled is true', () => {
      const actual = getValue(true);

      expect(actual).toBe(-999);
    });

    it('should return an empty object if isSelectedDisabled is false', () => {
      const actual = getValue(false);

      expect(actual).toBe(null);
    });
  });
});
