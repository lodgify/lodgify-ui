import { customMapStyles, defaultMapStyles, CONTROL_SIZE } from '../constants';

/**
 * @param  {boolean} hasDefaultStyles
 * @return {Object}
 */
export const getMapOptions = hasDefaultStyles => ({
  mapTypeControl: false,
  streetViewControl: false,
  styles: hasDefaultStyles ? defaultMapStyles : customMapStyles,
  controlSize: CONTROL_SIZE,
});
