import { mapStyles } from './mapStyles';

/**
 * Predicated by Google Maps API v3
 * See https://developers.google.com/maps/documentation/javascript/reference/3.exp/map#MapOptions
 */
export const mapOptions = {
  mapTypeControl: false,
  streetViewControl: false,
  styles: mapStyles,
  zoom: 13,
};
