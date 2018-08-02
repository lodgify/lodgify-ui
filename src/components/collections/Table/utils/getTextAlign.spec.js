import { getTextAlign } from './getTextAlign';

describe('getTextAlign', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  it('should return a string of `left` if the index is equal to 0', () => {
    const actual = getTextAlign(0);

    expect(actual).toEqual('left');
  });

  it('should return a string of `center` for any other number', () => {
    array.forEach(number => {
      const actual = getTextAlign(number);

      expect(actual).toEqual('center');
    });
  });
});
