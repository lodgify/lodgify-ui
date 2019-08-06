/**
 * @param  {Object} bounds
 * @return {Object}
 */
export const adaptENSWtoNESW = ({ east, north, south, west }) => ({
  ne: { lat: north, lng: east },
  sw: { lat: south, lng: west },
});
