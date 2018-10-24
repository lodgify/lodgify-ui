import React from 'react';
import PropTypes from 'prop-types';
import GridRow from 'semantic-ui-react/dist/commonjs/collections/Grid/GridRow';

/**
 * GridRow is the Lodgify UI interface for the
 * Semantic UI GridRow.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ horizontalAlignContent, ...props }) => (
  <GridRow {...props} textAlign={horizontalAlignContent} />
);

Component.displayName = 'GridRow';

Component.defaultProps = {
  horizontalAlignContent: 'left',
};

Component.propTypes = {
  /** Horizontally align the content of the row to the left, center or right. Text content can be justified to fit the width of the row. */
  horizontalAlignContent: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'justified',
  ]),
};
