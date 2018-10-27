/**
 * @param  {boolean} isFluid
 * @param  {number} imageWidth
 * @param  {number} imageHeight
 * @return {boolean}
 */
export const getIsFluid = (isFluid, imageWidth, imageHeight) =>
  isFluid && !(imageWidth || imageHeight);
