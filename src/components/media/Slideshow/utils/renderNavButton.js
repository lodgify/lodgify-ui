import 'semantic-ui-styles/button.less';
import React from 'react';
import { Button } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';

/**
 * @param  {string} iconName
 * @return {Function}
 */
export const renderNavButton = iconName => (onClick, disabled) => (
  <Button circular content={null} disabled={disabled} onClick={onClick} primary>
    <Icon isColorInverted name={iconName} />
  </Button>
);
