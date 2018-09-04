import { MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR } from '../constants';

/**
 * @param  {number} windowInnerWidth
 * @return {number|undefined}
 */
export const getNumberOfMonths = windowInnerWidth =>
  windowInnerWidth < MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR
    ? 1
    : undefined;
