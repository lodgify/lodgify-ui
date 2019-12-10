import { CONTROL_SIZE, MIN_ZOOM } from '../constants';

/**
 * @return {Object}
 */
export const getMapOptions = () => ({
  mapTypeControl: false,
  streetViewControl: false,
  controlSize: CONTROL_SIZE,
  minZoom: MIN_ZOOM,
});
