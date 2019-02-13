/**
 * @param  {Object} value
 * @return {Object}
 */
export const mapValueToProps = value =>
  !!value ? { date: value } : { date: null };
