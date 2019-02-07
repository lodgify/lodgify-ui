/**
 * @param {Object[]} options
 * @param {string} property
 * @return {boolean}
 */
export const getHasObjectProperty = (options, property) =>
  !!options && options.some(option => option.hasOwnProperty(property));
