import { getUniqueKey } from './getUniqueKey';

describe('getUniqueKey', () => {
  it('should compose a key from a string and an index', () => {
    const testCases = [
      { string: 'yo', expected: 'yo' },
      { string: 'yoyoyo', expected: 'yoyoy' },
      { string: 'yoyoyoyo', expected: 'yoyoy' },
    ];
    testCases.forEach(({ string, expected }, index) => {
      const actual = getUniqueKey(string, index);
      expect(actual).toEqual(`${expected}${index}`);
    });
  });
});
