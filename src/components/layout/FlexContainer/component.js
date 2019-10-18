import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

/**
 * A container for laying out children using the
 * [flexbox method](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).
 * Fills the full width and height of its parent or remaining space of a flex parent.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  alignContent,
  alignItems,
  children,
  className,
  flexDirection,
  flexWrap,
  justifyContent,
}) => (
  <div
    className={getClassNames('flex-container', className)}
    style={{
      display: 'flex',
      flexGrow: '1',
      height: '100%',
      alignContent,
      alignItems,
      flexDirection,
      flexWrap,
      justifyContent,
    }}
  >
    {children}
  </div>
);

Component.displayName = 'FlexContainer';

Component.defaultProps = {
  alignContent: null,
  alignItems: null,
  className: null,
  flexDirection: null,
  flexWrap: null,
  justifyContent: null,
};

Component.propTypes = {
  /** If there is more than one line of children, the alignment of the children as a whole relative to the cross axis of the flex container. */
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
  ]),
  /** The alignment of each child relative to the cross axis of the line on which that child is rendered. */
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  /** The children to be wrapped with a flex container. */
  children: PropTypes.node.isRequired,
  /** A custom class name. */
  className: PropTypes.string,
  /** The orientation of the main axis of the flex container. */
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  /** The wrap behaviour of the children. */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  /** The alignment of the children as a whole relative to the main axis of the flex container. */
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
};
