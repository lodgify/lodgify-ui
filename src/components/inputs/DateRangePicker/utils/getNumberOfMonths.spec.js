import { MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR } from '../constants';

import { getNumberOfMonths } from './getNumberOfMonths';

describe('getNumberOfMonths', () => {
  it('should return undefined if `windowInnerWidth` is equal to or more than the bound', () => {
    const testCases = [
      MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR + 1000,
      MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR + 1,
      MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR,
    ];

    testCases.forEach(testCase => {
      const actual = getNumberOfMonths(testCase);

      expect(actual).toBeUndefined();
    });
  });

  it('should return undefined if `window.innerWidth` is below the bound', () => {
    const testCases = [
      MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR - 1,
      MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR - 700,
    ];

    testCases.forEach(testCase => {
      const actual = getNumberOfMonths(testCase);

      expect(actual).toBe(1);
    });
  });
});
