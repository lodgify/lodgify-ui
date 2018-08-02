import moment from 'moment';

import { getNextStartDate } from './getNextStartDate';

const today = moment();

describe('getMonthsToDisplay', () => {
  it('should return the correct start date if not on mobile', () => {
    const actual = getNextStartDate(today, false);

    expect(
      today
        .clone()
        .add(4, 'month')
        .isSame(actual, 'date')
    ).toBe(true);
  });

  it('should return the correct start date if on mobile', () => {
    const actual = getNextStartDate(today, true);

    expect(
      today
        .clone()
        .add(1, 'month')
        .isSame(actual, 'date')
    ).toBe(true);
  });
});
