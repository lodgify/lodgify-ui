import React from 'react';
import { lowerCase } from 'lodash';
import { Flag } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';

import { VALID_FLAG_NAMES } from './validFlagNames';

/**
 * If country code known, return an appropriate flag component.
 * Default to returning a phone icon.
 * @param  {String} country
 * @return {Object}
 */
export const getIconOrFlag = country => {
  const flagName = lowerCase(country);
  return flagName && VALID_FLAG_NAMES.includes(flagName) ? (
    <Flag name={flagName} />
  ) : (
    <Icon name="phone" />
  );
};
