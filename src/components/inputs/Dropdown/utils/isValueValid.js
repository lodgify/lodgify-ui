/**
 * @param  {boolean|number|string} currentValue
 * @return {boolean}
 */
export const isValueValid = currentValue =>
  !!currentValue || currentValue === 0;
