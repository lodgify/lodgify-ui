import { getDefaultItems } from './getDefaultItems';

describe('getDefaultItems', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  describe('by default', () => {
    it('should return the first five items of an array', () => {
      const actual = getDefaultItems(array);
      expect(actual).toHaveLength(5);
      expect(actual).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('if `shouldGetThree` is true', () => {
    it('should return the first three items of an array', () => {
      const actual = getDefaultItems(array, true);
      expect(actual).toHaveLength(3);
      expect(actual).toEqual([1, 2, 3]);
    });
  });
});
