import { getUniqueKey } from './getUniqueKey';

describe('getUniqueKey', () => {
  it('should compose a key from a string and an index', () => {
    const testCases = [
      { string: 'yo', expected: 'yo' },
      { string: 'yoyoyo', expected: 'yoyoy' },
      { string: 'yoyoyoyo', expected: 'yoyoy' },
    ];
    testCases.forEach(({ string, expected }, i) => {
      const actual = getUniqueKey(string, i);
      expect(actual).toEqual(`${expected}${i}`);
    });
  });
});
