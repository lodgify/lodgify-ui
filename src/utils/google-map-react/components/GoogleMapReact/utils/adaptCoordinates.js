/**
 * @param  {number} latitude
 * @param  {number} longitude
 * @return {Object}
 */
export const adaptCoordinates = (latitude, longitude) => {
  if ([latitude, longitude].includes(null)) return { lat: 0, lng: 0 };

  return {
    lat: latitude,
    lng: longitude,
  };
};
