import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

/**
 * A submenu displays grouped navigation items.
 * @return {Object}
 */
export const Component = ({ children, isMenuItem, items }) => (
  <Dropdown
    item={isMenuItem}
    options={items}
    pointing="top"
    trigger={children}
  />
);

Component.displayName = 'Submenu';

Component.defaultProps = {
  isMenuItem: false,
};

Component.propTypes = {
  /** The clickable text to open the submenu.  */
  children: PropTypes.string.isRequired,
  /** Is the Dropdown an item in a Semantic UI Menu.  */
  isMenuItem: PropTypes.bool,
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
