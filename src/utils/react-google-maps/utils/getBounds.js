/**
 * @param  {Object} googleMap
 * @return {Object}
 */
export const getBounds = googleMap => {
  try {
    return googleMap.getBounds().toJSON();
  } catch {
    return;
  }
};
