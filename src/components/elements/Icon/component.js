import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Paragraph } from 'typography/Paragraph';

import { ICON_NAMES_LIST, ICON_NAMES } from './constants';
import { getPath } from './utils/getPath';
import { getButtonProps } from './utils/getButtonProps';

/**
 * An icon is a glyph used to represent something else.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  className,
  color,
  hasBorder,
  isCircular,
  isColorInverted,
  isDisabled,
  isLabelLeft,
  isButton,
  labelText,
  labelWeight,
  name,
  path,
  size,
  ...otherProps
}) => (
  <i
    className={classnames('icon', color, size, className, {
      circular: isCircular,
      'has-border': hasBorder,
      'inverted grey': isDisabled,
      'has-label': !!labelText,
      inverted: isColorInverted,
      'is-button': isButton,
      spinner: name === ICON_NAMES.SPINNER,
    })}
    {...getButtonProps(isButton)}
    // Passing through props is required for
    // compatibility with dynamic components e.g `ToolTip`
    {...otherProps}
  >
    {!!labelText && isLabelLeft && (
      <Paragraph weight={labelWeight}>{labelText}</Paragraph>
    )}
    <svg viewBox="0 0 24 24">
      <path d={getPath(name, path)} fill="currentColor" />
    </svg>
    {!!labelText && !isLabelLeft && (
      <Paragraph weight={labelWeight}>{labelText}</Paragraph>
    )}
  </i>
);

Component.displayName = 'Icon';

Component.defaultProps = {
  className: null,
  color: null,
  hasBorder: false,
  isButton: false,
  isCircular: false,
  isColorInverted: false,
  isDisabled: false,
  isLabelLeft: false,
  labelText: null,
  labelWeight: null,
  name: null,
  path: null,
  size: null,
};

Component.propTypes = {
  /** Custom className for the icon */
  className: PropTypes.string,
  /** The color of the icon. */
  color: PropTypes.oneOf([
    'black',
    'blue',
    'brown',
    'green',
    'grey',
    'light grey',
    'olive',
    'orange',
    'pink',
    'primary',
    'purple',
    'red',
    'teal',
    'violet',
    'yellow',
  ]),
  /** Is the icon formatted to have a border. */
  hasBorder: PropTypes.bool,
  /** Is the icon a button. */
  isButton: PropTypes.bool,
  /** Is the icon formatted to appear circular. */
  isCircular: PropTypes.bool,
  /** Is the color of the icon inverted for contrast. */
  isColorInverted: PropTypes.bool,
  /** Is the icon disabled. */
  isDisabled: PropTypes.bool,
  /** Is the label on the left hand side of the icon. */
  isLabelLeft: PropTypes.bool,
  /** A visible label to display with the icon. */
  labelText: PropTypes.string,
  /** The weight of the label. */
  labelWeight: PropTypes.oneOf(['heavy', 'light']),
  /**
   * The name of the icon to display. Takes priority over `props.path`.
   * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
   */
  name: PropTypes.oneOf(ICON_NAMES_LIST),
  /**
   * A string containing a series of path descriptions. Should fit a 24x24 viewBox.
   * [See MDN for documentation.](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)
   */
  path: PropTypes.string,
  /** The size of the icon. */
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive',
  ]),
};
