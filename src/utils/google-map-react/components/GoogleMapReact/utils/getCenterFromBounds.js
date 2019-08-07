/**
 * @param  {Object} bounds
 * @return {Object}
 */
export const getCenterFromBounds = ({ east, north, south, west }) => ({
  lat: (north + south) / 2,
  lng: (east + west) / 2,
});
