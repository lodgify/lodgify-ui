import React from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

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
