import React from 'react';
import { Flag, Icon } from 'semantic-ui-react';

/**
 * If country code known, return an appropriate flag component.
 * Default to returning a phone icon.
 * @param  {String} country
 * @return {Object}
 */
export const getIconOrFlag = country =>
  country ? <Flag name={country.toLowerCase()} /> : <Icon name="phone" />;
