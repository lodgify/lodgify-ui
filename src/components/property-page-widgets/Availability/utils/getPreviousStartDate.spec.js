import moment from 'moment';

import { getPreviousStartDate } from './getPreviousStartDate';

const today = moment();

describe('getMonthsToDisplay', () => {
  it('should return the correct start date if not on mobile', () => {
    const actual = getPreviousStartDate(today, false);
    expect(
      today
        .clone()
        .subtract(4, 'month')
        .isSame(actual, 'date')
    ).toBe(true);
  });

  it('should return the correct start date if on mobile', () => {
    const actual = getPreviousStartDate(today, true);
    expect(
      today
        .clone()
        .subtract(1, 'month')
        .isSame(actual, 'date')
    ).toBe(true);
  });
});
