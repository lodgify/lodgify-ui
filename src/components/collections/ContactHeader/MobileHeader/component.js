import React, { useState, useEffect } from 'react';
import {
  string,
  arrayOf,
  shape,
  func,
  bool,
  oneOfType,
  number,
  oneOf,
} from 'prop-types';
import { Menu, Accordion } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { Submenu } from 'elements/Submenu';
import { testidFactory } from 'utils/testid';
import { Logo } from 'elements/Logo';

import { PHONE_PREFIX } from '../constants';

const TEST_ID_PREFIX = 'MobileHeader';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({
  currencyNoResultsText,
  currencyOptions,
  currencyValue,
  languageOptions,
  languageValue,
  logoHref,
  logoSize,
  logoSizes,
  logoSrc,
  logoSrcSet,
  logoSubText,
  logoText,
  navigationItems,
  onChangeCurrency,
  onChangeLanguage,
  phoneNumber,
}) => {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    /* istanbul ignore next */
    if (navigationItems.length > 0) {
      setActiveItem(navigationItems[0].text);
    }
  }, [navigationItems.length]);

  const onMenuLinkClick = text => {
    setActiveItem(text);
  };

  return (
    <Modal
      className="hidden-contact-header-modal"
      closeIcon={<Icon labelText="Close" name="close" />}
      data-testid={testid()}
      header={
        <Logo
          logoHref={logoHref}
          logoSize={logoSize}
          logoSizes={logoSizes}
          logoSrc={logoSrc}
          logoSrcSet={logoSrcSet}
          logoSubText={logoSubText}
          logoText={logoText}
        />
      }
      isFullscreen
      trigger={<Icon name={ICON_NAMES.BARS} />}
    >
      <div>
        <Menu text vertical>
          {navigationItems.map(({ subItems, text, href }, index) =>
            size(subItems) ? (
              <Accordion
                as={Menu.Item}
                key={buildKeyFromStrings(text, index)}
                panels={[
                  {
                    title: {
                      content: text,
                      key: buildKeyFromStrings(text, index),
                    },
                    content: {
                      content: subItems.map(({ text, href }, index) => (
                        <Menu.Item
                          active={text === activeItem}
                          data-testid={testid(`accordionItem_${index}`)}
                          href={href}
                          key={buildKeyFromStrings(text, index)}
                          link
                          onClick={() => onMenuLinkClick(text)}
                        >
                          {text}
                        </Menu.Item>
                      )),
                      key: buildKeyFromStrings(index, text),
                    },
                  },
                ]}
              />
            ) : (
              <Menu.Item
                active={text === activeItem}
                data-testid={testid(`MobileHeaderItem_${index}`)}
                href={href}
                key={buildKeyFromStrings(text, index)}
                link
                onClick={() => onMenuLinkClick(text)}
              >
                {text}
              </Menu.Item>
            )
          )}
        </Menu>
        <Menu vertical>
          {size(languageOptions) > 1 && (
            <Menu.Item>
              <Submenu
                items={languageOptions}
                name="language"
                onChange={onChangeLanguage}
                value={languageValue}
                willOpenAbove
              />
            </Menu.Item>
          )}
          {size(currencyOptions) > 1 && (
            <Menu.Item>
              <Submenu
                isSearchable
                items={currencyOptions}
                name="currency"
                noResultsText={currencyNoResultsText}
                onChange={onChangeCurrency}
                value={currencyValue}
                willOpenAbove
              />
            </Menu.Item>
          )}
          {!!phoneNumber && (
            <Menu.Item className="is-selectable">
              <a href={`${PHONE_PREFIX}${phoneNumber.replace(/\s/g, '')}`}>
                <Icon labelText={phoneNumber} name={ICON_NAMES.PHONE} />
              </a>
            </Menu.Item>
          )}
        </Menu>
      </div>
    </Modal>
  );
};

Component.defaultProps = {
  currencyNoResultsText: '',
  currencyOptions: [],
  currencyValue: null,
  languageOptions: [],
  languageValue: null,
  logoHref: '',
  logoSize: 'medium',
  logoSizes: undefined,
  logoSrc: undefined,
  logoSrcSet: undefined,
  logoSubText: '',
  logoText: '',
  onChangeCurrency: undefined,
  onChangeLanguage: undefined,
  phoneNumber: '',
};

Component.propTypes = {
  /** The text to display when no results are returned from the currency dropdown. */
  currencyNoResultsText: string,
  /** The options which the user can select for the currency dropdown. */
  currencyOptions: arrayOf(
    shape({
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  /** The current value of the currency dropdown. */
  currencyValue: oneOfType([bool, number, string]),
  /** The options which the user can select for the language dropdown. */
  languageOptions: arrayOf(
    shape({
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  /** The current value of the language dropdown. */
  languageValue: oneOfType([bool, number, string]),
  /** The href for the logo link. */
  logoHref: string,
  /** The maximum size of the headers logo. */
  logoSize: oneOf(['medium', 'large', 'huge']),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSizes: string,
  /** The src url for the logo. */
  logoSrc: string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSrcSet: string,
  /** The text that appears under the logo or logo text. */
  logoSubText: string,
  /** The text for the logo. */
  logoText: string,
  /** The items for a user to navigate the site. */
  /** The navigation items displayed in the header. */
  navigationItems: arrayOf(
    shape({
      /** The href url for an item which is a link. */
      href: string,
      /** Sub navigation items to display as a [`<Submenu />`](#submenu) under an item. */
      subItems: arrayOf(
        shape({
          href: string.isRequired,
          target: string,
          text: string.isRequired,
        })
      ),
      /** Specifies where to display the linked navigation items URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: string,
      /** The visible text for an item. */
      text: string.isRequired,
    })
  ).isRequired,
  /** The function called when the currency dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeCurrency: func,
  /** The function called when the language dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeLanguage: func,
  /** The phone number to display. */
  phoneNumber: string,
};
