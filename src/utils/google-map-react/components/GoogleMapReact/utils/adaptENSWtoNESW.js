/**
 * @param  {Object}  bounds
 * @param  {number}  bounds.east
 * @param  {number}  bounds.north
 * @param  {number}  bounds.south
 * @param  {number}  bounds.west
 * @return {Object}
 */
export const adaptENSWtoNESW = ({ east, north, south, west }) => ({
  ne: { lat: north, lng: east },
  sw: { lat: south, lng: west },
});
