import React from 'react';
import { Segment } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';

/**
 * @param  {string} locationName
 * @return {Object}
 */
export const getLocationNameMarkup = locationName => (
  <Segment>
    {locationName}
    <Icon color="yellow" name={ICON_NAMES.MAP_PIN} size="small" />
  </Segment>
);
