/**
 * @param  {string[]} sizesArray
 * @param  {string}   size
 * @return {number}
 */
export const getHeadingNumber = (sizesArray, size) =>
  (sizesArray.indexOf(size) + 1).toString();
