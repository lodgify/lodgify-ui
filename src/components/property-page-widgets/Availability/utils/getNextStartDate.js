/**
 * @param  {Moment} date
 * @param  {Boolean} isUserOnMobile
 * @return {Moment}
 */
export const getNextStartDate = (date, isUserOnMobile) =>
  date.clone().add(isUserOnMobile ? 1 : 4, 'month');
