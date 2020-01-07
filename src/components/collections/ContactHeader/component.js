import React from 'react';
import { Menu } from 'semantic-ui-react';
import {
  string,
  arrayOf,
  shape,
  oneOfType,
  number,
  bool,
  func,
} from 'prop-types';

import { FlexContainer } from 'layout/FlexContainer';
import { Heading } from 'typography/Heading';
import { Button } from 'elements/Button';
import { Submenu } from 'elements/Submenu';
import { size } from 'utils/size';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { ShowOn } from 'layout/ShowOn';
import { testidFactory } from 'utils/testid';

import { HorizontalMenu } from '../HorizontalMenu';

import { HiddenHeader } from './HiddenHeader';
import { PHONE_PREFIX } from './constants';

const TEST_ID_PREFIX = 'contactHeader';

const testid = testidFactory(TEST_ID_PREFIX);

/**
 * A header displays a logo, grouped navigation items
 * and an optional primary call to action.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  headingText,
  headingHref,
  primaryButtonText,
  navigationMenuItems,
  languageOptions,
  onChangeLanguage,
  currencyOptions,
  onChangeCurrency,
  currencyValue,
  currencyNoResultsText,
  languageValue,
  phoneNumber,
}) => (
  <header className="contact-header" data-testid={testid()}>
    <ShowOn computer tablet widescreen>
      <FlexContainer alignItems="center" justifyContent="space-between">
        <Menu>
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
        <Heading>{headingText}</Heading>
        <Button>{primaryButtonText}</Button>
      </FlexContainer>
      <HorizontalMenu isHeader items={navigationMenuItems} />
    </ShowOn>
    <ShowOn mobile>
      <FlexContainer
        alignItems="center"
        className="hidden-contact-header"
        justifyContent="space-between"
      >
        <Heading>{headingText}</Heading>
        <HiddenHeader
          currencyNoResultsText={currencyNoResultsText}
          currencyOptions={currencyOptions}
          currencyValue={currencyValue}
          headingHref={headingHref}
          headingText={headingText}
          languageOptions={languageOptions}
          languageValue={languageValue}
          navigationItems={navigationMenuItems}
          onChangeCurrency={onChangeCurrency}
          phoneNumber={phoneNumber}
        />
      </FlexContainer>
    </ShowOn>
  </header>
);

Component.displayName = 'ContactHeader';

Component.defaultProps = {
  currencyNoResultsText: undefined,
  currencyOptions: [],
  currencyValue: null,
  headingHref: '',
  headingText: '',
  languageOptions: [],
  languageValue: null,
  onChangeCurrency: undefined,
  onChangeLanguage: undefined,
  phoneNumber: '',
  primaryButtonText: '',
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
  navigationMenuItems: arrayOf(
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
  /** The text to display for the primary button. */
  primaryButtonText: string,
};
