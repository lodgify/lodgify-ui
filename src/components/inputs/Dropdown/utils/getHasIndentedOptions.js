/**
 * @param  {Object[]} options
 * @return {boolean}
 */
export const getHasIndentedOptions = options =>
  options.some(option => option.hasOwnProperty('indent'));
