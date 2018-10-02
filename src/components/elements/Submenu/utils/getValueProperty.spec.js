import { getValueProperty } from './getValueProperty';

describe('getValueProperty', () => {
  describe('`isSelectedDisabled`', () => {
    it('is true then return an object with value', () => {
      const actual = getValueProperty(true);

      expect(actual).toEqual({
        value: -999,
      });
    });

    it('is false then return an empty object', () => {
      const actual = getValueProperty(false);

      expect(actual).toEqual({});
    });
  });
});
