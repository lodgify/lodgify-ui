/**
 * @param  {String}  time
 * @param  {Boolean} isCheckOut
 * @return {String}
 */
export const getCheckInOrOutTimeLabel = (time, isCheckOut) =>
  `Check ${isCheckOut ? 'out' : 'in'}: ${time}`;
