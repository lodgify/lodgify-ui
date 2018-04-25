import React from 'react';
import { Button } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';

/**
 * Render a left- or right-pointing nav button
 * for use in the slideshow element.
 * @param  {String} leftOrRight
 * @return {Function}
 */
export const renderNavButton = leftOrRight => (onClick, disabled) => (
  <Button primary circular disabled={disabled} onClick={onClick} content={null}>
    <Icon isColorInverted name={`chevron ${leftOrRight}`} />
  </Button>
);
