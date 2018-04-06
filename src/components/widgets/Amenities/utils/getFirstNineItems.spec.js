import { getFirstNineItems } from './getFirstNineItems';

describe('getFirstNineItems', () => {
  it('should return the first four items of an array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const actual = getFirstNineItems(array);
    expect(actual).toHaveLength(9);
    expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
