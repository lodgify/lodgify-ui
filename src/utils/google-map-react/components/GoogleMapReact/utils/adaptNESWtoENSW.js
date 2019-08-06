/**
 * @param  {Object} bounds
 * @return {Object}
 */
export const adaptNESWtoENSW = ({
  ne: { lat: north, lng: east },
  sw: { lat: south, lng: west },
}) => ({
  east,
  north,
  south,
  west,
});
