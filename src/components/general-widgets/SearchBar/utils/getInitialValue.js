/**
 * @param  {any} value
 * @return {any}
 */
export const getInitialValue = value =>
  typeof value === 'undefined' ? null : value;
