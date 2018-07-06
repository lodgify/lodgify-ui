/**
 * @param  {Moment} date
 * @param  {Boolean} isUserOnMobile
 * @return {Moment}
 */
export const getPreviousStartDate = (date, isUserOnMobile) =>
  date.clone().subtract(isUserOnMobile ? 1 : 4, 'month');
