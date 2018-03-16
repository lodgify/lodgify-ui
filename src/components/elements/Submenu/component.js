import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

import { adaptOptions } from './adaptOptions';

/**
 * A submenu displays grouped navigation items.
 * @return {Object}
 */
export const Component = ({
  children,
  isMenuItem,
  isTriggeredOnHover,
  isTriggerUnderlined,
  items,
}) => (
  <Dropdown
    className={isTriggerUnderlined ? 'underlined' : ''}
    item={isMenuItem}
    options={adaptOptions(items)}
    pointing="top"
    simple={isTriggeredOnHover}
    trigger={children}
  />
);

Component.displayName = 'Submenu';

Component.defaultProps = {
  isMenuItem: false,
  isTriggeredOnHover: false,
  isTriggerUnderlined: false,
};

Component.propTypes = {
  /** The clickable text to open the submenu.  */
  children: PropTypes.string.isRequired,
  /** Is it an item in a Semantic UI Menu.  */
  isMenuItem: PropTypes.bool,
  /** Is the trigger underlined for emphasis.  */
  isTriggerUnderlined: PropTypes.bool,
  /** Is it triggered on hover rather than click.  */
  isTriggeredOnHover: PropTypes.bool,
  /** The items the user can see in the submenu. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** The url for the item. */
      href: PropTypes.string.isRequired,
      /** The visible text for the item. */
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
