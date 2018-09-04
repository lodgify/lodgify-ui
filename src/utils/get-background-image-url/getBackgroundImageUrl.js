/**
 * Format an url as a valid value for a css background-image statement.
 * @typedef {Object} null
 * @param   {string|null} imageUrl
 * @return  {string|null}
 */
export const getBackgroundImageUrl = imageUrl =>
  imageUrl ? `url(${imageUrl})` : null;
