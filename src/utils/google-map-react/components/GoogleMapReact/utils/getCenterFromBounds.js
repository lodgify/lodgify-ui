/**
 * @param  {Object}  bounds
 * @param  {number}  bounds.east
 * @param  {number}  bounds.north
 * @param  {number}  bounds.south
 * @param  {number}  bounds.west
 * @return {Object}
 */
export const getCenterFromBounds = ({ east, north, south, west }) => ({
  lat: (north + south) / 2,
  lng: (east + west) / 2,
});
