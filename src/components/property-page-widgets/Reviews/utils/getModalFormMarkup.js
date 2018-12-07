import React from 'react';

import { Button } from 'elements/Button';
import { Modal } from 'elements/Modal';
import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';
import { InputGroup } from 'collections/InputGroup';
import { TextArea } from 'inputs/TextArea';
import { Dropdown } from 'inputs/Dropdown';
import { RatingInput } from 'inputs/RatingInput';

/**
 * @param {Object}   props
 * @param {string}   props.commentInputLabel
 * @param {string}   props.emailInputLabel
 * @param {string}   props.errorMessage
 * @param {string}   props.guestTypeInputLabel
 * @param {Object[]} props.guestTypeOptions
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
 */
export const getModalFormMarkup = ({
  /* eslint-disable react/prop-types */
  commentInputLabel,
  emailInputLabel,
  errorMessage,
  formHeadingText,
  guestTypeInputLabel,
  guestTypeOptions,
  locationInputLabel,
  monthInputLabel,
  monthOptions,
  nameInputLabel,
  onSubmit,
  ratingAverage,
  ratingInputLabel,
  roomTypeInputLabel,
  roomTypeOptions,
  submitButtonText,
  successMessage,
  titleInputLabel,
  validation,
  yearInputLabel,
  yearOptions,
  /* eslint-enable react/prop-types */
}) => (
  <Modal
    trigger={
      <Button isCompact isPositionedRight isRounded size="medium">
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
      <RatingInput
        label={ratingInputLabel}
        name="rating"
        ratingNumber={ratingAverage}
      />
      <TextInput autoComplete="name" label={nameInputLabel} name="name" />
      <InputGroup>
        <TextInput autoComplete="email" label={emailInputLabel} name="email" />
        <TextInput
          autoComplete="country-name"
          label={locationInputLabel}
          name="location"
        />
      </InputGroup>
      <InputGroup>
        <Dropdown label={monthInputLabel} name="month" options={monthOptions} />
        <Dropdown label={yearInputLabel} name="year" options={yearOptions} />
      </InputGroup>
      <InputGroup>
        <Dropdown
          label={roomTypeInputLabel}
          name="roomType"
          options={roomTypeOptions}
        />
        <Dropdown
          label={guestTypeInputLabel}
          name="guestType"
          options={guestTypeOptions}
        />
      </InputGroup>
      <TextInput label={titleInputLabel} name="title" />
      <TextArea label={commentInputLabel} name="comments" />
    </Form>
  </Modal>
);
