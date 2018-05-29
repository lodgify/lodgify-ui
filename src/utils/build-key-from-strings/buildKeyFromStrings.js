/**
 * @param  {...String} strings
 * @return {String}
 */
export const buildKeyFromStrings = (...strings) =>
  strings.map(string => string.toString()).join('');
