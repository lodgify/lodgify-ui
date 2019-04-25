/**
 * @typedef {Object} null
 * @param   {string|null|undefined} propsFocusedInput
 * @return  {boolean}
 */
export const getIsFocusControlled = propsFocusedInput =>
  typeof propsFocusedInput !== 'undefined';
