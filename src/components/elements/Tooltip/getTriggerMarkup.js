import React from 'react';

import { Icon, ICON_NAMES } from 'elements/Icon';

export const getTriggerMarkup = size => (
  <Icon
    color="grey"
    isCircular
    isColorInverted
    name={ICON_NAMES.INFO}
    size={size}
  />
);
