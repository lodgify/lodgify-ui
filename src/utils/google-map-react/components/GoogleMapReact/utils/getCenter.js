import { adaptCoordinates } from './adaptCoordinates';

/**
 * @param  {Object} centerFromBounds
 * @param  {number} latitude
 * @param  {number} longitude
 * @return {Object}
 */
export const getCenter = (centerFromBounds, latitude, longitude) =>
  centerFromBounds || adaptCoordinates(latitude, longitude);
