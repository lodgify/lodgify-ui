/**
 * @typedef {Object} Moment
 * @param   {Moment} date
 * @param   {boolean} isUserOnMobile
 * @return  {Moment}
 */
export const getNextStartDate = (date, isUserOnMobile) =>
  date.clone().add(isUserOnMobile ? 1 : 4, 'month');
