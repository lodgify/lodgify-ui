/**
 * @param  {number} imageWidth
 * @param  {number} imageHeight
 * @return {boolean}
 */
export const getIsFluid = (imageWidth, imageHeight) =>
  !(imageWidth || imageHeight);
