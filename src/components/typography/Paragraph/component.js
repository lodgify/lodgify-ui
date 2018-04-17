import React from 'react';
import PropTypes from 'prop-types';

const MEDIUM = 'medium';
const TINY = 'tiny';

/**
 * A paragraph provides text content
 * @return {Object}
 */
export const Component = ({ children, size }) => (
  <p className={size === TINY ? size : ''}>{children}</p>
);

Component.displayName = 'Paragraph';

Component.defaultProps = {
  size: MEDIUM,
};

Component.propTypes = {
  /** The paragraph text. */
  children: PropTypes.string.isRequired,
  /** The size of the paragraph. */
  size: PropTypes.oneOf([MEDIUM, TINY]),
};
