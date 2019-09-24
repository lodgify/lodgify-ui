import {
  customMapStyles,
  defaultMapStyles,
  CONTROL_SIZE,
  MIN_ZOOM,
} from '../constants';

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
});
