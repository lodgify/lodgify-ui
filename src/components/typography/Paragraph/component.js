import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

const MEDIUM = 'medium';
const TINY = 'tiny';

/**
 * A paragraph provides text content
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children, isCompact, size, weight }) => (
  <p
    className={getClassNames(weight, {
      tiny: size === TINY,
      'is-compact': isCompact,
    })}
  >
    {children}
  </p>
);

Component.displayName = 'Paragraph';

Component.defaultProps = {
  isCompact: false,
  size: MEDIUM,
  weight: null,
};

Component.propTypes = {
  /** The paragraph content. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** The paragraph has reduced line height. */
  isCompact: PropTypes.bool,
  /** The size of the paragraph. */
  size: PropTypes.oneOf([MEDIUM, TINY]),
  /** The weight of the paragraph. */
  weight: PropTypes.oneOf(['heavy', 'light']),
};
