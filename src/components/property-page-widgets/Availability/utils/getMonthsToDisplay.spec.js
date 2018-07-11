import moment from 'moment';

import { getMonthsToDisplay } from './getMonthsToDisplay';

const today = moment();

describe('getMonthsToDisplay', () => {
  it('should return the correct number of months is not on mobile', () => {
    const actual = getMonthsToDisplay(today, false);
    expect(actual).toHaveLength(4);
  });

  it('should return the months in sequential order', () => {
    const actual = getMonthsToDisplay(today, false);

    expect(actual[0].isSame(today, 'date')).toBe(true);
    expect(actual[3].isSame(today.clone().add(3, 'months'), 'date')).toBe(true);
  });

  it('should return the correct number of months if on mobile', () => {
    const actual = getMonthsToDisplay(today, true);
    expect(actual).toHaveLength(1);
  });
});
