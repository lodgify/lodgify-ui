/**
 * @param  {number} latitude
 * @param  {number} longitude
 * @return {Object}
 */
export const adaptCoordinates = (latitude, longitude) => {
  if ([latitude, longitude].includes(null)) return;

  return {
    lat: latitude,
    lng: longitude,
  };
};
