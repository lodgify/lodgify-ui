/**
 * @param  {String} string
 * @param  {Number} i
 * @return {String}
 */
export const getUniqueKey = (string, i) => `${string.substr(0, 5)}${i}`;
