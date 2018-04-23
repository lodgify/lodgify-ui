import { getNumberOfMonths } from './getNumberOfMonths';

describe('getNumberOfMonths', () => {
  it('should return undefined if `window.innerWidth` is 800 or more', () => {
    const testCases = [1000, 801, 800];
    const windowInnerWidthStash = window.innerWidth;
    testCases.forEach(testCase => {
      window.innerWidth = testCase;
      const actual = getNumberOfMonths();
      expect(actual).toBeUndefined();
    });
    window.innerWidth = windowInnerWidthStash;
  });

  it('should return undefined if `window.innerWidth` is 800 or more', () => {
    const testCases = [799, 30, 1];
    const windowInnerWidthStash = window.innerWidth;
    testCases.forEach(testCase => {
      window.innerWidth = testCase;
      const actual = getNumberOfMonths();
      expect(actual).toBe(1);
    });
    window.innerWidth = windowInnerWidthStash;
  });
});
