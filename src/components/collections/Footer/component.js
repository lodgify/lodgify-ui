import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { toUpper } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Submenu } from 'elements/Submenu';
import { Icon } from 'elements/Icon';
import { Divider } from 'elements/Divider';

import { getAreNavigationItemsGrouped } from './utils/getAreNavigationItemsGrouped';
import { getGroupedNavigationItems } from './utils/getGroupedNavigationItems';
import { getMenuItemMarkup } from './utils/getMenuItemMarkup';
import { getCopyrightText } from './utils/getCopyrightText';

/**
 * A footer displays navigation items, language and currency selectors,
 * social media links and contact information for a property.
 * @return {Object}
 */
export const Component = ({
  businessName,
  currencyOptions,
  languageOptions,
  navigationItems,
  onChangeCurrency,
  onChangeLanguage,
  phoneNumber,
  propertyAddress,
  socialMediaLinks,
}) => (
  <div className="is-footer">
    <Menu borderless inverted stackable>
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
    </Menu>
    <Menu borderless color="grey" inverted stackable>
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
      <Menu.Item>
        <Icon label={phoneNumber} name="phone" />
      </Menu.Item>
      {socialMediaLinks.length && (
        <Menu.Menu position="right">
          {socialMediaLinks.map(({ href, iconName, iconPath }, index) => (
            <Menu.Item href={href} key={buildKeyFromStrings(href, index)} link>
              <Icon name={iconName} path={iconPath} />
            </Menu.Item>
          ))}
        </Menu.Menu>
      )}
      <Divider hasLine />
      <Menu.Item>{propertyAddress}</Menu.Item>
      <Menu.Item position="right">{getCopyrightText(businessName)}</Menu.Item>
    </Menu>
  </div>
);

Component.displayName = 'Footer';

Component.defaultProps = {
  socialMediaLinks: [],
};

Component.propTypes = {
  /** The name of the business holding copyright on the website. */
  businessName: PropTypes.string.isRequired,
  /** The options which the user can select for the currency dropdown. */
  currencyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
    })
  ).isRequired,
  /** The options which the user can select for the language dropdown. */
  languageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
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
      /** The name of the icon to display. Can be any allowed name for the [`Icon` element](/#!/Icon) */
      iconName: PropTypes.string,
      /** The path of the icon to display. See [`Icon` props](/#!/Icon) for guidance. */
      iconPath: PropTypes.string,
    })
  ),
};
