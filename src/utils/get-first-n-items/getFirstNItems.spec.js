import { getFirstNItems } from './getFirstNItems';

describe('getFirstNItems', () => {
  it('should return the first n items of an array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const testCases = [
      { number: 1, expected: [1] },
      { number: 4, expected: [1, 2, 3, 4] },
      { number: 8, expected: array },
      { number: 12, expected: array },
    ];

    testCases.forEach(({ number, expected }) => {
      const actual = getFirstNItems(number, array);

      expect(actual).toEqual(expected);
    });
  });
});
