import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

/**
 * GridRow is the Lodgify UI interface for the
 * Semantic UI Grid.Row.
 *
 * @returns {Object}
 */
export const Component = ({ horizontalAlignContent, ...props }) => (
  <Grid.Row {...props} textAlign={horizontalAlignContent} />
);

Component.displayName = 'GridRow';

Component.defaultProps = {
  horizontalAlignContent: 'left',
};

Component.propTypes = {
  /** Vertically align the content of the column to the bottom, middle or top. */
  horizontalAlignContent: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'justified',
  ]),
};
