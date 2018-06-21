/**
 * Adds unique key to each option in an array.
 * @param  {Object[]} options
 * @return {Object[]}
 */
export const adaptOptions = options =>
  options.map(option => ({ key: option.text, ...option }));
