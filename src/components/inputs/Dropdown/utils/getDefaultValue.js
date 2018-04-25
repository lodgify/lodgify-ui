/**
 * If the options have images, return the first option.
 * If the options have no images, return null.
 * @param  {Object} optionsWithImages
 * @return {String|Number|null}
 */
export const getDefaultValue = optionsWithImages =>
  optionsWithImages ? optionsWithImages[0].value : null;
