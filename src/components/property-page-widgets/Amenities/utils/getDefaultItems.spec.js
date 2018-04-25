import { getDefaultItems } from './getDefaultItems';

describe('getDefaultItems', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  describe('by default', () => {
    it('should return the first nine items of an array', () => {
      const actual = getDefaultItems(array);
      expect(actual).toHaveLength(9);
      expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('if `shouldGetSix` is true', () => {
    it('should return the first six items of an array', () => {
      const actual = getDefaultItems(array, true);
      expect(actual).toHaveLength(6);
      expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
