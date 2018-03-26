import React from 'react';
import { Button } from 'semantic-ui-react';

/**
 * Render a left- or right-pointing nav button
 * for use in the slideshow element.
 * @param  {String} leftOrRight
 * @return {Function}
 */
export const renderNavButton = leftOrRight => (onClick, disabled) => (
  <Button
    primary
    circular
    disabled={disabled}
    icon={`chevron ${leftOrRight}`}
    onClick={onClick}
    content={null}
  />
);
