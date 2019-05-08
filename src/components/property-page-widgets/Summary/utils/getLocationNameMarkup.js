import 'semantic-ui-styles/segment.less';
import React from 'react';
import { Segment } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';

/**
 * @param  {string} locationName
 * @return {Object}
 */
export const getLocationNameMarkup = locationName => (
  <Segment className="is-location-name" title={locationName}>
    {locationName}
    <Icon color="primary" name={ICON_NAMES.MAP_PIN} size="small" />
  </Segment>
);
