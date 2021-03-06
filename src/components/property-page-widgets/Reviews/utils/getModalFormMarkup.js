import React from 'react';

import { Button } from 'elements/Button';
import { Modal } from 'elements/Modal';
import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';
import { InputGroup } from 'collections/InputGroup';
import { TextArea } from 'inputs/TextArea';
import { Dropdown } from 'inputs/Dropdown';
import { RatingInput } from 'inputs/RatingInput';
import { Checkbox } from 'inputs/Checkbox';
import { getPrivacyConsentLabel } from 'utils/get-privacy-consent-label';

import {
  EMAIL_MAX_CHARACTERS,
  COMMENT_MAX_CHARACTERS,
  NAME_MAX_CHARACTERS,
  TITLE_MAX_CHARACTERS,
  LOCATION_MAX_CHARACTERS,
} from '../constants';

/**
 * @param {Object}   props
 * @param {string}   props.commentInputLabel
 * @param {string}   props.emailInputLabel
 * @param {string}   props.errorMessage
 * @param {string}   props.guestTypeInputLabel
 * @param {Object[]} props.guestTypeOptions
 * @param {boolean}  props.isPrivacyConsentRequired
 * @param {string}   props.locationInputLabel
 * @param {string}   props.monthInputLabel
 * @param {Object[]} props.monthOptions
 * @param {string}   props.nameInputLabel
 * @param {Function} props.onSubmit
 * @param {number}   props.ratingAverage
 * @param {string}   props.ratingInputLabel
 * @param {string}   props.formHeadingText
 * @param {string}   props.roomTypeInputLabel
 * @param {Object[]} props.roomTypeOptions
 * @param {string}   props.submitButtonText
 * @param {string}   props.successMessage
 * @param {string}   props.titleInputLabel
 * @param {Object}   props.validation
 * @param {string}   props.yearInputLabel
 * @param {Object[]} props.yearOptions
 * @param {string|Function}   props.privacyConsentLabel
 * @param {boolean}  isShowingPlaceholder
 */
export const getModalFormMarkup = (
  {
    /* eslint-disable react/prop-types */
    botProtectionMessage,
    commentInputLabel,
    emailInputLabel,
    errorMessage,
    formHeadingText,
    guestTypeInputLabel,
    guestTypeOptions,
    isBotProtected,
    isPrivacyConsentRequired,
    locationInputLabel,
    monthInputLabel,
    monthOptions,
    nameInputLabel,
    onSubmit,
    ratingInputLabel,
    submitButtonText,
    successMessage,
    titleInputLabel,
    validation,
    yearInputLabel,
    yearOptions,
    privacyConsentLabelText,
    privacyConsentLabelLinkUrl,
    privacyConsentLabelLinkText,
    /* eslint-enable react/prop-types */
  },
  isShowingPlaceholder
) => (
  <Modal
    isClosingOnDimmerClick={false}
    trigger={
      <Button
        isCompact
        isDisabled={isShowingPlaceholder}
        isPositionedRight
        isRounded
        size="medium"
      >
        {submitButtonText}
      </Button>
    }
  >
    <Form
      autoComplete="off"
      errorMessage={errorMessage}
      headingText={formHeadingText}
      onSubmit={onSubmit}
      submitButtonText={submitButtonText}
      successMessage={successMessage}
      validation={validation}
    >
      <RatingInput label={ratingInputLabel} name="rating" />
      <TextInput
        autoComplete="name"
        label={nameInputLabel}
        maxCharacters={NAME_MAX_CHARACTERS}
        name="name"
      />
      <InputGroup>
        <TextInput
          autoComplete="email"
          label={emailInputLabel}
          maxCharacters={EMAIL_MAX_CHARACTERS}
          name="email"
        />
        <TextInput
          autoComplete="country-name"
          label={locationInputLabel}
          maxCharacters={LOCATION_MAX_CHARACTERS}
          name="location"
        />
      </InputGroup>
      <InputGroup>
        <Dropdown label={monthInputLabel} name="month" options={monthOptions} />
        <Dropdown label={yearInputLabel} name="year" options={yearOptions} />
      </InputGroup>
      <InputGroup>
        <Dropdown
          label={guestTypeInputLabel}
          name="guestType"
          options={guestTypeOptions}
        />
      </InputGroup>
      <TextInput
        label={titleInputLabel}
        maxCharacters={TITLE_MAX_CHARACTERS}
        name="title"
      />
      <TextArea
        label={commentInputLabel}
        maxCharacters={COMMENT_MAX_CHARACTERS}
        name="comments"
      />
      {isBotProtected && botProtectionMessage}
      {isPrivacyConsentRequired && (
        <Checkbox
          label={getPrivacyConsentLabel(
            privacyConsentLabelText,
            privacyConsentLabelLinkUrl,
            privacyConsentLabelLinkText
          )}
          name="privacyConsent"
        />
      )}
    </Form>
  </Modal>
);
