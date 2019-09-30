import {
  customMapStyles,
  defaultMapStyles,
  CONTROL_SIZE,
  MIN_ZOOM,
} from '../constants';
import {
  NORTH_BORDER_BOUNDS,
  SOUTH_BORDER_BOUNDS,
  EAST_BORDER_BOUNDS,
  WEST_BORDER_BOUNDS,
} from '../constants/constants';

import { getMapOptions } from './getMapOptions';

const MAP_BORDER_BOUNDS = {
  north: NORTH_BORDER_BOUNDS,
  south: SOUTH_BORDER_BOUNDS,
  east: EAST_BORDER_BOUNDS,
  west: WEST_BORDER_BOUNDS,
};

describe('getMapOptions', () => {
  describe('if `hasDefaultStyles` is `false`', () => {
    it('should return the right shape', () => {
      const actual = getMapOptions(false);

      expect(actual).toEqual({
        mapTypeControl: false,
        streetViewControl: false,
        styles: customMapStyles,
        controlSize: CONTROL_SIZE,
        minZoom: MIN_ZOOM,
        restriction: {
          latLngBounds: MAP_BORDER_BOUNDS,
          strictBounds: true,
        },
      });
    });
  });

  describe('if `hasDefaultStyles` is `true`', () => {
    it('should return the right shape', () => {
      const actual = getMapOptions(true);

      expect(actual).toEqual({
        mapTypeControl: false,
        streetViewControl: false,
        styles: defaultMapStyles,
        controlSize: CONTROL_SIZE,
        minZoom: MIN_ZOOM,
        restriction: {
          latLngBounds: MAP_BORDER_BOUNDS,
          strictBounds: true,
        },
      });
    });
  });
});
