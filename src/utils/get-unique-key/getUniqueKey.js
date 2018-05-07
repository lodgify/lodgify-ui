/**
 * @param  {String} string
 * @param  {Number} index
 * @return {String}
 */
export const getUniqueKey = (string, index) => `${string.substr(0, 5)}${index}`;
