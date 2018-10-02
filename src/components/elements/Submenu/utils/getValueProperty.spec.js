import { getValueProperty } from './getValueProperty';

describe('getValueProperty', () => {
  describe('`isSelectedDisabled`', () => {
    it('should return an object with value if isSelectedDisabled is true', () => {
      const actual = getValueProperty(true);

      expect(actual).toEqual({
        value: -999,
      });
    });

    it('should return an empty object if isSelectedDisabled is false', () => {
      const actual = getValueProperty(false);

      expect(actual).toEqual({});
    });
  });
});
