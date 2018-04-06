import { getFirstFourItems } from './getFirstFourItems';

describe('getFirstFourItems', () => {
  it('should return the first four items of an array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = getFirstFourItems(array);
    expect(actual).toHaveLength(4);
    expect(actual).toEqual([1, 2, 3, 4]);
  });
});
