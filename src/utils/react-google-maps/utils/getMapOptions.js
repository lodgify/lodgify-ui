import { customMapStyles, defaultMapStyles } from '../constants';

/**
 * @param  {boolean} hasDefaultStyles
 * @return {Object}
 */
export const getMapOptions = hasDefaultStyles => ({
  mapTypeControl: false,
  streetViewControl: false,
  styles: hasDefaultStyles ? defaultMapStyles : customMapStyles,
  zoom: 13,
});
