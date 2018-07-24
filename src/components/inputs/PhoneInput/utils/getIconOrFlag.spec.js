import React from 'react';
import { Flag } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';

import { getIconOrFlag } from './getIconOrFlag';

const countryCode = 'ES';

describe('getIconOrFlag', () => {
  describe('if argument `country` is undefined', () => {
    it('should return an `Icon` component', () => {
      const actual = getIconOrFlag(undefined);

      expect(actual).toEqual(<Icon name="phone" />);
    });
  });

  describe('if argument `country` is defined but not a valid flag name', () => {
    it('should return an `Icon` component', () => {
      const actual = getIconOrFlag('zz');

      expect(actual).toEqual(<Icon name="phone" />);
    });
  });

  describe('if argument `country` is defined and a valid flag name', () => {
    it('should return a `Flag` component with the right lower case country code', () => {
      const actual = getIconOrFlag(countryCode);

      expect(actual).toEqual(<Flag name={countryCode.toLowerCase()} />);
    });
  });
});
