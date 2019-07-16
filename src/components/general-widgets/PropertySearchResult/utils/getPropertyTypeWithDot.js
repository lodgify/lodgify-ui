/**
 * @param {number} ratingNumber
 * @param {string} propertyType
 * @return {string}
 */
export const getPropertyTypeWithDot = (ratingNumber, propertyType) =>
  ratingNumber >= 1 ? `· ${propertyType}` : propertyType;
