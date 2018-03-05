import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Image } from 'semantic-ui-react';
import { size } from 'lodash';

import { Heading } from '../../typography/Heading';
import { Submenu } from '../../elements/Submenu';
import { Button } from '../../elements/Button';

/**
 * A header displays a logo, grouped navigation items
 * and an optional primary call to action.
 * @return {Object}
 */
export const Component = ({
  logoSrc,
  logoText,
  navigationItems,
  primaryCTA,
}) => (
  <Menu borderless>
    <Menu.Item link href="/">
      {logoSrc ? (
        <Image alt={logoText} src={logoSrc} />
      ) : (
        <Heading size="tiny">{logoText}</Heading>
      )}
    </Menu.Item>
    <Menu.Menu position="right">
      {navigationItems.map(
        ({ subItems, text, href }) =>
          size(subItems) ? (
            <Submenu isMenuItem items={subItems}>
              {text}
            </Submenu>
          ) : (
            <Menu.Item link href={href}>
              {text}
            </Menu.Item>
          )
      )}
      {primaryCTA && (
        <Menu.Item link href={primaryCTA.href}>
          <Button>{primaryCTA.text}</Button>
        </Menu.Item>
      )}
    </Menu.Menu>
  </Menu>
);

Component.displayName = 'Header';

Component.defaultProps = {
  logoSrc: null,
  primaryCTA: null,
};

Component.propTypes = {
  /** The src url for the logo. */
  logoSrc: PropTypes.string,
  /** The text for the logo. */
  logoText: PropTypes.string.isRequired,
  /** The items for a user to navigate the site. */
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      /** The href url for an item which is a link. */
      href: PropTypes.string,
      /** Sub navigation items to display as a [`<Submenu />`](#submenu) under an item. */
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ),
      /** The visible text for an item. */
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** An optional primary call to action to display as a [`<Button />`](#button). */
  primaryCTA: PropTypes.shape({
    /** The href url for the call to action. */
    href: PropTypes.string,
    /** The  visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
};
