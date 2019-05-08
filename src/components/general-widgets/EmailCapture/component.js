import 'semantic-ui-styles/message.less';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

import { withResponsive } from 'utils/with-responsive';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { ShowOn } from 'layout/ShowOn';
import { TextInput } from 'inputs/TextInput';
import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import {
  ACCEPT_PRIVACY_POLICY,
  SUBSCRIBE,
  SUBSCRIBE_TO_OUR_NEWSLETTER,
  YOUR_EMAIL,
} from 'utils/default-strings';

import { getPrivacyCheckboxMarkup } from './utils/getPrivacyCheckboxMarkup';

/**
 * An email capture displays a form inviting a user to submit an email address.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  buttonText,
  emailInputError,
  emailInputLabel,
  emailInputValue,
  errorMessage,
  headingText,
  isPrivacyConsentInputChecked,
  isPrivacyConsentRequired,
  isUserOnMobile,
  onChangeEmailInput,
  onClickButton,
  onClickPrivacyConsentInput,
  privacyConsentInputError,
  privacyConsentLabelLinkText,
  privacyConsentLabelLinkUrl,
  privacyConsentLabelText,
  successMessage,
}) => (
  <HorizontalGutters>
    <Divider />
    <Grid>
      <GridRow verticalAlign="middle">
        {!errorMessage ? (
          <Fragment>
            <GridColumn computer={5} mobile={12} tablet={12} textAlign="center">
              <Heading hasMargin={false} size="small">
                {headingText}
              </Heading>
              <ShowOn
                mobile
                parent={Divider}
                parentProps={{ size: 'small' }}
                tablet
              />
            </GridColumn>
            <GridColumn computer={4} mobile={12} tablet={7}>
              <TextInput
                error={emailInputError}
                isFluid
                label={emailInputLabel}
                onChange={onChangeEmailInput}
                value={emailInputValue}
              />
              <ShowOn mobile parent={Divider} parentProps={{ size: 'small' }} />
            </GridColumn>
            <GridColumn computer={3} mobile={12} tablet={5}>
              {isUserOnMobile && isPrivacyConsentRequired && (
                <Fragment>
                  {getPrivacyCheckboxMarkup(
                    privacyConsentInputError,
                    isPrivacyConsentInputChecked,
                    privacyConsentLabelText,
                    privacyConsentLabelLinkUrl,
                    privacyConsentLabelLinkText,
                    onClickPrivacyConsentInput
                  )}
                  <Divider />
                </Fragment>
              )}
              {!successMessage ? (
                <Button isFluid isRounded onClick={onClickButton}>
                  {buttonText}
                </Button>
              ) : (
                <Message content={successMessage} success />
              )}
            </GridColumn>
          </Fragment>
        ) : (
          <GridColumn width={12}>
            <Message content={errorMessage} error />
          </GridColumn>
        )}
      </GridRow>
      {!errorMessage && !isUserOnMobile && isPrivacyConsentRequired && (
        <GridRow>
          <GridColumn computer={5} />
          <GridColumn computer={4} mobile={12} tablet={12}>
            {getPrivacyCheckboxMarkup(
              privacyConsentInputError,
              isPrivacyConsentInputChecked,
              privacyConsentLabelText,
              privacyConsentLabelLinkUrl,
              privacyConsentLabelLinkText,
              onClickPrivacyConsentInput
            )}
          </GridColumn>
        </GridRow>
      )}
    </Grid>
    <Divider />
  </HorizontalGutters>
);

export const ComponentWithResponsive = withResponsive(Component);

Component.displayName = 'EmailCapture';

Component.defaultProps = {
  buttonText: SUBSCRIBE,
  emailInputError: false,
  emailInputLabel: YOUR_EMAIL,
  emailInputValue: undefined,
  errorMessage: null,
  headingText: SUBSCRIBE_TO_OUR_NEWSLETTER,
  isPrivacyConsentInputChecked: false,
  isPrivacyConsentRequired: false,
  onChangeEmailInput: Function.prototype,
  onClickPrivacyConsentInput: Function.prototype,
  onClickButton: Function.prototype,
  privacyConsentInputError: undefined,
  privacyConsentLabelLinkText: undefined,
  privacyConsentLabelLinkUrl: undefined,
  privacyConsentLabelText: ACCEPT_PRIVACY_POLICY,
  successMessage: null,
};

Component.propTypes = {
  /** The text to display on the button. */
  buttonText: PropTypes.string,
  /** An error message to display in place of the component. */
  emailInputError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** The visible label for the text input. */
  emailInputLabel: PropTypes.string,
  /** The value of the text input. */
  emailInputValue: PropTypes.string,
  /** Is the text input in an error state. */
  errorMessage: PropTypes.string,
  /** The text to display as a heading. */
  headingText: PropTypes.string,
  /** The value of the privacy consent checkbox. */
  isPrivacyConsentInputChecked: PropTypes.bool,
  /** Displays a privacy consent checkbox. */
  isPrivacyConsentRequired: PropTypes.bool,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The function called when the text input is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeEmailInput: PropTypes.func,
  /** The function called when the button is clicked.
   *  @param {String} name
   *  @param {String} value
   */
  onClickButton: PropTypes.func,
  /** The function called when the privacy consent checkbox is clicked.
   *  @param {Object} event
   */
  onClickPrivacyConsentInput: PropTypes.func,
  /** The text to display in the privacy consent error message. */
  privacyConsentInputError: PropTypes.string,
  /** The text to display as the link next to the privacy consent checkbox. */
  privacyConsentLabelLinkText: PropTypes.string,
  /** The location of the link next to the privacy consent checkbox. */
  privacyConsentLabelLinkUrl: PropTypes.string,
  /** The text to display next to the privacy consent checkbox. */
  privacyConsentLabelText: PropTypes.node,
  /** A success message to display in place of the button. */
  successMessage: PropTypes.string,
};
