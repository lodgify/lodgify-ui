import React, { useRef, useState, useEffect } from 'react';
import {
  string,
  arrayOf,
  shape,
  func,
  bool,
  oneOfType,
  number,
} from 'prop-types';
import { Menu, Accordion } from 'semantic-ui-react';
import { size } from 'lodash';

import { Heading } from 'typography/Heading';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { Submenu } from 'elements/Submenu';
import { testidFactory } from 'utils/testid';

import { PHONE_PREFIX } from '../constants';

const TEST_ID_PREFIX = 'hiddenHeader';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({
  headingHref,
  headingText,
  navigationItems,
  languageOptions,
  onChangeLanguage,
  languageValue,
  currencyOptions,
  currencyNoResultsText,
  onChangeCurrency,
  currencyValue,
  phoneNumber,
}) => {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    /* istanbul ignore next */
    if (navigationItems.length > 0) {
      setActiveItem(navigationItems[0].text);
    }
  }, [navigationItems.length]);

  const menu = useRef();

  const onMenuLinkClick = text => {
    setActiveItem(text);
  };

  return (
    <Modal
      className="hidden-contact-header-modal"
      closeIcon={<Icon labelText="Close" name="close" />}
      data-testid={testid()}
      header={
        <Menu.Item href={headingHref} link>
          <Heading className="header-title" size="small">
            {headingText}
          </Heading>
        </Menu.Item>
      }
      isFullscreen
      trigger={<Icon name={ICON_NAMES.BARS} />}
    >
      <div ref={menu}>
        <Menu text vertical>
          {navigationItems.map(({ subItems, text, link }, index) =>
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
                data-testid={testid(`hiddenHeaderItem_${index}`)}
                href={link}
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
  headingHref: '',
  headingText: '',
  languageOptions: [],
  languageValue: null,
  phoneNumber: '',
  onChangeCurrency: undefined,
  onChangeLanguage: undefined,
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
  /** The link for the heading. */
  headingHref: string,
  /** The text for the heading. */
  headingText: string,
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
  /** The items for a user to navigate the site. */
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
