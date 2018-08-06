import { buildKeyFromStrings } from './buildKeyFromStrings';

describe('buildKeyFromStrings', () => {
  it('should compose a key from an array of strings and/or integers', () => {
    const testCases = [
      { strings: ['yo', 1], expected: 'yo1' },
      { strings: ['yo', 'yo', 2], expected: 'yoyo2' },
      { strings: ['yo', 'yo', 'yo', 3], expected: 'yoyoyo3' },
    ];

    testCases.forEach(({ strings, expected }) => {
      const actual = buildKeyFromStrings(...strings);

      expect(actual).toEqual(expected);
    });
  });
});
