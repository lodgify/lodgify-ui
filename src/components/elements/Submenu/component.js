import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';

import { adaptOnChange } from './utils/adaptOnChange';
import { adaptOptions } from './utils/adaptOptions';

/**
 * A submenu displays grouped navigation items.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  isMenuItem,
  isTriggeredOnHover,
  isTriggerUnderlined,
  items,
  name,
  onChange,
  pointing,
  value,
  willOpenAbove,
}) => (
  <Dropdown
    className={isTriggerUnderlined ? 'underlined' : ''}
    icon={<Icon name={ICON_NAMES.CARET_DOWN} size="small" />}
    item={isMenuItem}
    name={name}
    onChange={adaptOnChange(onChange, name)}
    options={adaptOptions(items)}
    pointing={pointing}
    scrolling
    simple={isTriggeredOnHover}
    trigger={children}
    upward={willOpenAbove}
    value={value}
  />
);

Component.displayName = 'Submenu';

Component.defaultProps = {
  children: null,
  isMenuItem: false,
  isTriggeredOnHover: false,
  isTriggerUnderlined: false,
  name: null,
  onChange: Function.prototype,
  pointing: 'top left',
  value: null,
  willOpenAbove: false,
};

Component.propTypes = {
  /** The clickable element to open the submenu.  */
  children: PropTypes.node,
  /** Is it an item in a Semantic UI Menu.  */
  isMenuItem: PropTypes.bool,
  /** Is the trigger underlined for emphasis.  */
  isTriggerUnderlined: PropTypes.bool,
  /** Is it triggered on hover rather than click.  */
  isTriggeredOnHover: PropTypes.bool,
  /** The items the user can see in the submenu. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** The url for a link item. */
      href: PropTypes.string,
      /** The visible text for the item. */
      text: PropTypes.string,
      /** The underlying value for the item. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
  /** The name of submenu, used when `props.onChange` is called. */
  name: PropTypes.string,
  /** A function called when the dropdown value changes. */
  onChange: PropTypes.func,
  /** The pointing direction of the dropdown */
  pointing: PropTypes.oneOf([
    'left',
    'right',
    'top',
    'top left',
    'top right',
    'bottom',
    'bottom left',
    'bottom right',
  ]),
  /** The current value of the submenu where it is consumed as a controlled component. */
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** Will the submenu open above the input. */
  willOpenAbove: PropTypes.bool,
};
