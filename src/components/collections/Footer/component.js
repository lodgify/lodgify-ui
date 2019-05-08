import 'semantic-ui-styles/menu.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { toUpper, size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { EmailCapture } from 'general-widgets/EmailCapture';
import { Submenu } from 'elements/Submenu';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Divider } from 'elements/Divider';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { getHrefTelString } from 'utils/get-href-tel-string';
import { EMAIL, FAX } from 'utils/default-strings/constants';

import { getHrefFaxString } from './utils/getHrefFaxString';
import { getHrefMailToString } from './utils/getHrefMailToString';
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
  currencyNoResultsText,
  currencyOptions,
  currencyValue,
  emailAddress,
  emailAddressLabel,
  emailCaptureButtonText,
  emailCaptureErrorMessage,
  emailCaptureHeadingText,
  emailCaptureInputError,
  emailCaptureInputLabel,
  emailCaptureInputValue,
  emailCaptureOnClickButton,
  emailCapturePrivacyConsentInputError,
  emailCapturePrivacyConsentLabelLinkText,
  emailCapturePrivacyConsentLabelLinkUrl,
  emailCapturePrivacyConsentLabelText,
  emailCaptureSuccessMessage,
  faxNumber,
  faxNumberLabel,
  hasEmailCapture,
  isEmailCapturePrivacyConsentInputChecked,
  isEmailCapturePrivacyConsentRequired,
  languageOptions,
  languageValue,
  navigationItems,
  onChangeCurrency,
  onChangeEmailCaptureInput,
  onChangeLanguage,
  onClickEmailCapturePrivacyConsentInput,
  phoneNumber,
  propertyAddress,
  socialMediaLinks,
}) => (
  <footer>
    {hasEmailCapture && (
      <EmailCapture
        buttonText={emailCaptureButtonText}
        emailInputError={emailCaptureInputError}
        emailInputLabel={emailCaptureInputLabel}
        emailInputValue={emailCaptureInputValue}
        errorMessage={emailCaptureErrorMessage}
        headingText={emailCaptureHeadingText}
        isPrivacyConsentInputChecked={isEmailCapturePrivacyConsentInputChecked}
        isPrivacyConsentRequired={isEmailCapturePrivacyConsentRequired}
        onChangeEmailInput={onChangeEmailCaptureInput}
        onClickButton={emailCaptureOnClickButton}
        onClickPrivacyConsentInput={onClickEmailCapturePrivacyConsentInput}
        privacyConsentInputError={emailCapturePrivacyConsentInputError}
        privacyConsentLabelLinkText={emailCapturePrivacyConsentLabelLinkText}
        privacyConsentLabelLinkUrl={emailCapturePrivacyConsentLabelLinkUrl}
        privacyConsentLabelText={emailCapturePrivacyConsentLabelText}
        successMessage={emailCaptureSuccessMessage}
      />
    )}
    {size(navigationItems) > 0 && (
      <div className="top-navigation">
        <HorizontalGutters as={Menu} borderless inverted stackable>
          {getAreNavigationItemsGrouped(navigationItems)
            ? getGroupedNavigationItems(navigationItems).map(
                ({ text, subItems }, index) => (
                  <Menu.Item
                    className="grouped"
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
        </HorizontalGutters>
      </div>
    )}
    <div className="bottom-navigation">
      <HorizontalGutters as={Menu} borderless inverted stackable>
        <Menu.Menu>
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
              <a href={getHrefTelString(phoneNumber)}>
                <Icon labelText={phoneNumber} name={ICON_NAMES.PHONE} />
              </a>
            </Menu.Item>
          )}
        </Menu.Menu>
        {size(socialMediaLinks) > 0 && (
          <Menu.Menu position="right">
            {socialMediaLinks.map(
              ({ href, iconName, iconPath, target }, index) => (
                <Menu.Item
                  href={href}
                  key={buildKeyFromStrings(href, index)}
                  link
                  target={target}
                >
                  <Icon name={iconName} path={iconPath} />
                </Menu.Item>
              )
            )}
          </Menu.Menu>
        )}
        <Divider hasLine />
        <Menu.Menu>
          {propertyAddress && (
            <Menu.Item className="is-selectable">{propertyAddress}</Menu.Item>
          )}
          {faxNumber && (
            <Menu.Item className="is-selectable">
              <label>{faxNumberLabel}</label>
              <a href={getHrefFaxString(faxNumber)}>{faxNumber}</a>
            </Menu.Item>
          )}
          {emailAddress && (
            <Menu.Item className="is-selectable">
              <label>{emailAddressLabel}</label>
              <a href={getHrefMailToString(faxNumber)}>{emailAddress}</a>
            </Menu.Item>
          )}
          {copyrightText && (
            <Menu.Item className="is-selectable" position="right">
              {copyrightText}
            </Menu.Item>
          )}
        </Menu.Menu>
      </HorizontalGutters>
    </div>
  </footer>
);

Component.displayName = 'Footer';

Component.defaultProps = {
  copyrightText: null,
  currencyNoResultsText: undefined,
  currencyOptions: [],
  currencyValue: null,
  emailAddress: undefined,
  emailAddressLabel: EMAIL,
  emailCaptureButtonText: undefined,
  emailCaptureErrorMessage: undefined,
  emailCaptureHeadingText: undefined,
  emailCaptureInputError: undefined,
  emailCaptureInputLabel: undefined,
  emailCaptureInputValue: undefined,
  emailCaptureOnClickButton: undefined,
  emailCapturePrivacyConsentInputError: undefined,
  emailCapturePrivacyConsentLabelLinkText: undefined,
  emailCapturePrivacyConsentLabelLinkUrl: undefined,
  emailCapturePrivacyConsentLabelText: undefined,
  emailCaptureSuccessMessage: undefined,
  faxNumber: undefined,
  faxNumberLabel: FAX,
  hasEmailCapture: false,
  isEmailCapturePrivacyConsentInputChecked: undefined,
  isEmailCapturePrivacyConsentRequired: undefined,
  languageOptions: [],
  languageValue: null,
  navigationItems: null,
  onChangeEmailCaptureInput: undefined,
  onClickEmailCapturePrivacyConsentInput: undefined,
  phoneNumber: null,
  propertyAddress: undefined,
  socialMediaLinks: [],
};

Component.propTypes = {
  /** The text to display as a copyright notice */
  copyrightText: PropTypes.string,
  /** The text to display when no results are returned from the currency dropdown. */
  currencyNoResultsText: PropTypes.string,
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
  ),
  /** The current value of the currency dropdown. */
  currencyValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** The email address to display. */
  emailAddress: PropTypes.string,
  /** The label for the email address. */
  emailAddressLabel: PropTypes.string,
  /** The text to display on the button on the email capture form. */
  emailCaptureButtonText: PropTypes.string,
  /** An error message to display in place of the email capture form. */
  emailCaptureErrorMessage: PropTypes.string,
  /** The text to display as a heading on the email capture form. */
  emailCaptureHeadingText: PropTypes.string,
  /** Is the text input on the email capture form in an error state. */
  emailCaptureInputError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  /** The visible label for the text input on the email capture form. */
  emailCaptureInputLabel: PropTypes.string,
  /** The value of the text input on the email capture form. */
  emailCaptureInputValue: PropTypes.string,
  /** The function called when the button on the email capture form is clicked.
   *  @param {Object} event
   */
  emailCaptureOnClickButton: PropTypes.func,
  /** The text to display in the privacy consent error message. */
  emailCapturePrivacyConsentInputError: PropTypes.string,
  /** The text to display as the link next to the privacy consent checkbox. */
  emailCapturePrivacyConsentLabelLinkText: PropTypes.string,
  /** The location of the link next to the privacy consent checkbox. */
  emailCapturePrivacyConsentLabelLinkUrl: PropTypes.string,
  /** The text to display next to the privacy consent checkbox. */
  emailCapturePrivacyConsentLabelText: PropTypes.string,
  /** A success message to display in place of the button. */
  emailCaptureSuccessMessage: PropTypes.string,
  /** The fax number to display. */
  faxNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The label for the fax number. */
  faxNumberLabel: PropTypes.string,
  /** Does the footer have an email capture form showing. */
  hasEmailCapture: PropTypes.bool,
  /** The value of the privacy consent checkbox. */
  isEmailCapturePrivacyConsentInputChecked: PropTypes.bool,
  /** Displays a privacy consent checkbox in the email capture form. */
  isEmailCapturePrivacyConsentRequired: PropTypes.bool,
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
  ),
  /** The current value of the language dropdown. */
  languageValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** The items for a user to navigate the site. */
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      /** The href url for an item which is a link. */
      href: PropTypes.string,
      /** Sub navigation items to display as a [`<Submenu />`](#submenu) under an item. */
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          target: PropTypes.string,
          text: PropTypes.string.isRequired,
        })
      ),
      /** Specifies where to display the linked navigation items URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: PropTypes.string,
      /** The visible text for an item. */
      text: PropTypes.string.isRequired,
    })
  ),
  /** The function called when the currency dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeCurrency: PropTypes.func.isRequired,
  /** The function called when the text input on the email capture form is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeEmailCaptureInput: PropTypes.func,
  /** The function called when the language dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeLanguage: PropTypes.func.isRequired,
  /** The function called when the privacy consent checkbox on the email capture form is clicked.
   *  @param {Object} event
   */
  onClickEmailCapturePrivacyConsentInput: PropTypes.func,
  /** The phone number to display */
  phoneNumber: PropTypes.string,
  /** The address of the property */
  propertyAddress: PropTypes.string,
  /** The links to social media accounts to display. */
  socialMediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /** The href url pointing to the social media account. */
      href: PropTypes.string,
      /** The name of the icon to display. Can be any allowed name for the [`Icon` element](#/Icon)
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string,
      /** The path of the icon to display. See [`Icon` props](#/Icon) for guidance. */
      iconPath: PropTypes.string,
      /** Specifies where to display the social media links URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: PropTypes.string,
    })
  ),
};
