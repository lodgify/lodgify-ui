import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

/**
 * A button indicates a possible user action.
 * @return {Object}
 */
export const Component = ({ children, isDisabled, isLoading }) => (
  <Button disabled={isDisabled} loading={isLoading}>
    {children}
  </Button>
);

Component.displayName = 'Button';

Component.defaultProps = {
  isDisabled: false,
  isLoading: false,
};

Component.propTypes = {
  /** The text to display on the button. */
  children: PropTypes.string.isRequired,
  /** Is the button disabled. */
  isDisabled: PropTypes.bool,
  /** Is the button in loading state. */
  isLoading: PropTypes.bool,
};
