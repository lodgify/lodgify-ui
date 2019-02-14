/**
 * @param  {Object} value
 * @return {Object}
 */
export const mapValueToProps = value =>
  !!value
    ? { endDate: value.endDate, startDate: value.startDate }
    : { startDate: null, endDate: null };
