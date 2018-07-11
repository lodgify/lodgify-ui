/**
 * @param  {Moment} date
 * @param  {Boolean} isUserOnMobile
 * @return {Moment[]}
 */
export const getMonthsToDisplay = (date, isUserOnMobile) => {
  return Array(isUserOnMobile ? 1 : 4)
    .fill(date)
    .map((item, index) => item.clone().add(index, 'month'));
};
