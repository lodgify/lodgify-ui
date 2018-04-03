/**
 * Format an url as a valid value for a css background-image statement.
 * @param  {String|null} imageUrl
 * @return {String|null}
 */
export const getBackgroundImageUrl = imageUrl => imageUrl && `url(${imageUrl})`;
