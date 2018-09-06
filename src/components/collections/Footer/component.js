import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { toUpper } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Submenu } from 'elements/Submenu';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Divider } from 'elements/Divider';
import { Container } from 'layout/Container';

import { getAreNavigationItemsGrouped } from './utils/getAreNavigationItemsGrouped';
import { getGroupedNavigationItems } from './utils/getGroupedNavigationItems';
import { getMenuItemMarkup } from './utils/getMenuItemMarkup';

/**
 * A footer displays navigation items, language and currency selectors,
 * social media links and contact information for a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  copyrightText,
  currencyOptions,
  languageOptions,
  navigationItems,
  onChangeCurrency,
  onChangeLanguage,
  phoneNumber,
  propertyAddress,
  socialMediaLinks,
}) => (
  <footer>
    <div className="top-navigation">
      <Container as={Menu} borderless inverted stackable>
        {getAreNavigationItemsGrouped(navigationItems)
          ? getGroupedNavigationItems(navigationItems).map(
              ({ text, subItems }, index) => (
                <Menu.Item
                  key={buildKeyFromStrings(text || subItems[0].text, index)}
                >
                  <Menu.Menu>
                    {text && <Menu.Header>{toUpper(text)}</Menu.Header>}
                    {subItems.map(getMenuItemMarkup)}
                  </Menu.Menu>
                </Menu.Item>
              )
            )
          : navigationItems.map(getMenuItemMarkup)}
      </Container>
    </div>
    <div className="bottom-navigation">
      <Container as={Menu} borderless inverted stackable>
        <Menu.Item>
          <Submenu
            items={languageOptions}
            name="language"
            onChange={onChangeLanguage}
            willOpenAbove
          />
        </Menu.Item>
        <Menu.Item>
          <Submenu
            items={currencyOptions}
            name="currency"
            onChange={onChangeCurrency}
            willOpenAbove
          />
        </Menu.Item>
        <Menu.Item className="is-selectable">
          <Icon labelText={phoneNumber} name={ICON_NAMES.PHONE} />
        </Menu.Item>
        {!!socialMediaLinks.length && (
          <Menu.Menu position="right">
            {socialMediaLinks.map(({ href, iconName, iconPath }, index) => (
              <Menu.Item
                href={href}
                key={buildKeyFromStrings(href, index)}
                link
              >
                <Icon name={iconName} path={iconPath} />
              </Menu.Item>
            ))}
          </Menu.Menu>
        )}
        <Divider hasLine />
        <Menu.Item className="is-selectable">{propertyAddress}</Menu.Item>
        {copyrightText && (
          <Menu.Item className="is-selectable" position="right">
            {copyrightText}
          </Menu.Item>
        )}
      </Container>
    </div>
  </footer>
);

Component.displayName = 'Footer';

Component.defaultProps = {
  copyrightText: null,
  socialMediaLinks: [],
};

Component.propTypes = {
  /** The text to display as a copyright notice */
  copyrightText: PropTypes.string,
  /** The options which the user can select for the currency dropdown. */
  currencyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
  /** The options which the user can select for the language dropdown. */
  languageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
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
  /** The function called when the currency dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeCurrency: PropTypes.func.isRequired,
  /** The function called when the language dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeLanguage: PropTypes.func.isRequired,
  /** The phone number to display */
  phoneNumber: PropTypes.string.isRequired,
  /** The address of the property */
  propertyAddress: PropTypes.string.isRequired,
  /** The links to social media accounts to display. */
  socialMediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /** The href url pointing to the social media account. */
      href: PropTypes.string,
      /** The name of the icon to display. Can be any allowed name for the [`Icon` element](/#!/Icon)
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string,
      /** The path of the icon to display. See [`Icon` props](/#!/Icon) for guidance. */
      iconPath: PropTypes.string,
    })
  ),
};
