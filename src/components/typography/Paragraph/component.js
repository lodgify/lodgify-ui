import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const MEDIUM = 'medium';
const TINY = 'tiny';

/**
 * A paragraph provides text content
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children, isCompact, size, weight, className }) => (
  <p
    className={classnames(weight, className, {
      tiny: size === TINY,
      'is-compact': isCompact,
    })}
  >
    {children}
  </p>
);

Component.displayName = 'Paragraph';

Component.defaultProps = {
  className: null,
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
  /** Custom className for the paragraph. */
  className: PropTypes.string,
  /** The paragraph has reduced line height. */
  isCompact: PropTypes.bool,
  /** The size of the paragraph. */
  size: PropTypes.oneOf([MEDIUM, TINY]),
  /** The weight of the paragraph. */
  weight: PropTypes.oneOf(['heavy', 'light']),
};
