import React from 'react';
import { PropTypes } from 'prop-types';
import { Placeholder } from 'semantic-ui-react';

/**
 * A TextPlaceholder indicates that text content will soon appear in a layout.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ isFluid, length }) => (
  <Placeholder fluid={isFluid}>
    <Placeholder.Header>
      <Placeholder.Line length={length} />
    </Placeholder.Header>
  </Placeholder>
);

Component.displayName = 'TextPlaceholder';

Component.defaultProps = {
  isFluid: true,
  length: 'full',
};

Component.propTypes = {
  /** The placeholder fills the width of its parent. */
  isFluid: PropTypes.bool,
  /** The length of the lines in the placeholder. */
  length: PropTypes.oneOf([
    'very short',
    'short',
    'medium',
    'long',
    'very long',
    'full',
  ]),
};
