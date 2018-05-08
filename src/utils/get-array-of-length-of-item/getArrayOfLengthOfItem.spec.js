import { getArrayOfLengthOfItem } from './getArrayOfLengthOfItem';

describe('getArrayOfLengthOfItem', () => {
  const length = 12;
  const item = 'someItem';

  it('should return an array of the required length', () => {
    const actual = getArrayOfLengthOfItem(length, item);
    expect(actual).toHaveLength(length);
  });

  it('should return an array with all identical items', () => {
    const actual = getArrayOfLengthOfItem(length, item);
    actual.forEach(actualItem => {
      expect(actualItem).toBe(item);
    });
  });
});
