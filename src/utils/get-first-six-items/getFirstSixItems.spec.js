import { getFirstSixItems } from './getFirstSixItems';

describe('getFirstSixItems', () => {
  it('should return the first six items of an array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = getFirstSixItems(array);

    expect(actual).toHaveLength(6);
    expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
