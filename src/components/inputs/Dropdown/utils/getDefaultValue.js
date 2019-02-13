import { isValueValid } from './isValueValid';

/**
 * @typedef {Object} null
 * @param   {Object[]} options
 * @param   {boolean} hasImages
 * @param   {boolean} hasLabel
 * @param   {string|boolean|number} value
 * @return  {string|number|undefined|null}
 */
export const getDefaultValue = (options, hasImages, hasLabel, value) => {
  if (isValueValid(value)) {
    return undefined;
  }

  if (options.length && (hasImages || !hasLabel)) {
    return options[0].value;
  }

  return null;
};
