import React from 'react';
import { Flag, Icon } from 'semantic-ui-react';

const countryCode = 'ES';

import { getIconOrFlag } from './getIconOrFlag';

describe('getIconOrFlag', () => {
  describe('if argument `country` is undefined', () => {
    it('should return an `Icon` component', () => {
      const actual = getIconOrFlag(undefined);
      expect(actual).toEqual(<Icon name="phone" />);
    });
  });

  describe('if argument `country` is defined', () => {
    it('should return a `Flag` component with the right lower case country code', () => {
      const actual = getIconOrFlag(countryCode);
      expect(actual).toEqual(<Flag name={countryCode.toLowerCase()} />);
    });
  });
});
