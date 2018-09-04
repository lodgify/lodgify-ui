/**
 * @typedef {Object} Moment
 * @param   {Moment} date
 * @param   {boolean} isUserOnMobile
 * @return  {Moment[]}
 */
export const getMonthsToDisplay = (date, isUserOnMobile) => {
  return Array(isUserOnMobile ? 1 : 4)
    .fill(date)
    .map((item, index) => item.clone().add(index, 'month'));
};
