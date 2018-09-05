/**
 * @typedef {Object} Moment
 * @param   {Moment} date
 * @param   {boolean} isUserOnMobile
 * @return  {Moment}
 */
export const getPreviousStartDate = (date, isUserOnMobile) =>
  date.clone().subtract(isUserOnMobile ? 1 : 4, 'month');
