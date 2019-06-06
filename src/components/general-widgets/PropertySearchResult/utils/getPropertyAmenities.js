/**
 * @param {Array} amenities
 * @return {string}
 */
export const getPropertyAmenities = amenities =>
  amenities
    .map((amenity, index) => (index === 0 ? amenity : ` · ${amenity}`))
    .join('');
