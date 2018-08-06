/**
 * @param  {Number} index
 * @param  {Array} descriptionTextArray
 * @param  {String} extraDescriptionText
 * @return {Boolean}
 */
export const isDescriptionDisplayingWithEllipsis = (
  index,
  descriptionTextArray,
  extraDescriptionText
) => !!extraDescriptionText && index === descriptionTextArray.length - 1;
