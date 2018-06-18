/**
 * @param  {Object[]} options
 * @return {Boolean}
 */
export const getHasImages = options =>
  options.some(option => option.hasOwnProperty('image'));
