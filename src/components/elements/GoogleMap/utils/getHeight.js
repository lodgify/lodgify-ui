/**
 * @param  {string}  height
 * @param  {boolean} isFullBleed
 * @param  {boolean} isFluid
 * @return {string}
 */
export const getHeight = (height, isFullBleed, isFluid) =>
  isFullBleed || isFluid ? '100%' : height;
