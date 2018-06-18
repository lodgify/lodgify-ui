/**
 * @param  {Object[]} options
 * @param  {Boolean} hasImages
 * @param  {Boolean} hasLabel
 * @return {String|Number|null}
 */
export const getDefaultValue = (options, hasImages, hasLabel) => {
  /**
   * If
   * 1. there is at least one option, and
   * 2. one or more of the options has an image, or
   * 3. the Dropdown does not have a label
   */
  if (options.length && (hasImages || !hasLabel)) {
    return options[0].value;
  }
  return null;
};
