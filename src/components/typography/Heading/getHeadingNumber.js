/**
 * @param  {String[]} sizesArray
 * @param  {String}   size
 * @return {Number}
 */
export const getHeadingNumber = (sizesArray, size) =>
  (sizesArray.indexOf(size) + 1).toString();
