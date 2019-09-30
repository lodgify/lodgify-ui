import {
  customMapStyles,
  defaultMapStyles,
  CONTROL_SIZE,
  MIN_ZOOM,
} from '../constants';
import {
  SOUTH_BORDER_BOUNDS,
  NORTH_BORDER_BOUNDS,
  EAST_BORDER_BOUNDS,
  WEST_BORDER_BOUNDS,
} from '../constants/constants';

/**
 * @param  {boolean} hasDefaultStyles
 * @return {Object}
 */
export const getMapOptions = hasDefaultStyles => ({
  mapTypeControl: false,
  streetViewControl: false,
  styles: hasDefaultStyles ? defaultMapStyles : customMapStyles,
  controlSize: CONTROL_SIZE,
  minZoom: MIN_ZOOM,
  restriction: {
    latLngBounds: {
      north: NORTH_BORDER_BOUNDS,
      south: SOUTH_BORDER_BOUNDS,
      east: EAST_BORDER_BOUNDS,
      west: WEST_BORDER_BOUNDS,
    },
    strictBounds: true,
  },
});
