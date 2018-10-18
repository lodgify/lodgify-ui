import { getExtraItems } from './getExtraItems';

describe('getExtraItems', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  describe('by default', () => {
    it('should return the last seven items of an array', () => {
      const actual = getExtraItems(array);

      expect(actual).toHaveLength(7);
      expect(actual).toEqual([6, 7, 8, 9, 10, 11, 12]);
    });
  });

  describe('if `shouldGetThree` is true', () => {
    it('should return the last nine items of an array', () => {
      const actual = getExtraItems(array, true);

      expect(actual).toHaveLength(9);
      expect(actual).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
  });
});
