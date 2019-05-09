import 'semantic-ui-styles/label.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

/**
 * Error message for use with input elements
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ errorMessage }) => (
  <Label color="red" pointing="below">
    {errorMessage}
  </Label>
);

Component.displayName = 'ErrorMessage';

Component.propTypes = {
  /** The error message to display */
  errorMessage: PropTypes.string.isRequired,
};
