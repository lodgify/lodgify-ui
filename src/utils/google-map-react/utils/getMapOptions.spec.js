import {
  customMapStyles,
  defaultMapStyles,
  CONTROL_SIZE,
  MIN_ZOOM,
} from '../constants';

import { getMapOptions } from './getMapOptions';

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
      });
    });
  });
});
