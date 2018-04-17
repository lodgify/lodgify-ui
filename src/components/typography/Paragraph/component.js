import React from 'react';
import PropTypes from 'prop-types';

const MEDIUM = 'medium';
const TINY = 'tiny';

/**
 * A paragraph provides text content
 * @return {Object}
 */
export const Component = ({ children, size, isWord, isBoldWord }) => {
  if (isBoldWord) {
    return <b className={size === TINY ? size : ''}>{children}</b>;
  }

  if (isWord) {
    return <span className={size === TINY ? size : ''}>{children}</span>;
  }

  return <p className={size === TINY ? size : ''}>{children}</p>;
};

Component.displayName = 'Paragraph';

Component.defaultProps = {
  size: MEDIUM,
  isWord: false,
  isBoldWord: false,
};

Component.propTypes = {
  /** The paragraph text. */
  children: PropTypes.string.isRequired,
  /** The size of the paragraph. */
  size: PropTypes.oneOf([MEDIUM, TINY]),
  /** Is the children a single inline world. */
  isWord: PropTypes.bool,
  /** Is the children a bold text. */
  isBoldWord: PropTypes.bool,
};
