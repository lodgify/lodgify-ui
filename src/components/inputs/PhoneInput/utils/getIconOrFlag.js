import React from 'react';
import { Flag } from 'semantic-ui-react';

import { lowerCase } from 'utils/lower-case';
import { Icon, ICON_NAMES } from 'elements/Icon';

import { VALID_FLAG_NAMES } from './validFlagNames';

/**
 * If country code known, return an appropriate flag component.
 * Default to returning a phone icon.
 * @param  {string} country
 * @return {Object}
 */
export const getIconOrFlag = country => {
  const flagName = lowerCase(country);

  return flagName && VALID_FLAG_NAMES.includes(flagName) ? (
    <Flag name={flagName} />
  ) : (
    <Icon name={ICON_NAMES.PHONE} size="small" />
  );
};
