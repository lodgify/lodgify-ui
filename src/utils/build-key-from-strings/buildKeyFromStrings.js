/**
 * @param  {...string} strings
 * @return {string}
 */
export const buildKeyFromStrings = (...strings) =>
  strings.map(string => string.toString()).join('');
