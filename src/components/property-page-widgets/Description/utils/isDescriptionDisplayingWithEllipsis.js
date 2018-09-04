/**
 * @param  {number} index
 * @param  {Array} descriptionTextArray
 * @param  {string} extraDescriptionText
 * @return {boolean}
 */
export const isDescriptionDisplayingWithEllipsis = (
  index,
  descriptionTextArray,
  extraDescriptionText
) => !!extraDescriptionText && index === descriptionTextArray.length - 1;
