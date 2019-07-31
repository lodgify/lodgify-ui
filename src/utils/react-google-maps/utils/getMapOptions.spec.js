import { customMapStyles, defaultMapStyles } from '../constants';

import { getMapOptions } from './getMapOptions';

describe('getMapOptions', () => {
  describe('if `hasDefaultStyles` is `false`', () => {
    it('should return the right shape', () => {
      const actual = getMapOptions(false);

      expect(actual).toEqual({
        mapTypeControl: false,
        streetViewControl: false,
        styles: customMapStyles,
        zoom: 13,
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
        zoom: 13,
      });
    });
  });
});
