import { MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR } from '../constants';

/**
 * @return {Number|undefined}
 */
export const getNumberOfMonths = windowInnerWidth =>
  windowInnerWidth < MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR
    ? 1
    : undefined;
