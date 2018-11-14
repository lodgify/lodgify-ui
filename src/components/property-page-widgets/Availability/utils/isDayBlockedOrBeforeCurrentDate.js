import moment from 'moment';
import { isInclusivelyAfterDay } from 'react-dates';

/**
 * @typedef Moment
 * @param   {Moment}   day
 * @param   {Function} getIsDayBlocked
 * @return  {boolean}
 */
export const isDayBlockedOrBeforeCurrentDate = (day, getIsDayBlocked) =>
  !!day && (getIsDayBlocked(day) || !isInclusivelyAfterDay(day, moment()));
