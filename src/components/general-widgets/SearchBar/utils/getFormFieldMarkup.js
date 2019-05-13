/* eslint react/prop-types: 0 */
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';

import { size } from 'utils/size';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';
import { NumberInput } from 'inputs/NumberInput';
import { DateRangePicker } from 'inputs/DateRangePicker';

/**
 * @param  {Object}   props
 * @param  {string}   props.dateRangePickerLocaleCode
 * @param  {Object}   props.datesInputValue
 * @param  {Function} props.datesInputOnFocusChange
 * @param  {Function} props.getIsDayBlocked
 * @param  {string}   props.guestsInputValue
 * @param  {boolean}  props.isShowingSummary
 * @param  {string}   props.locationInputValue
 * @param  {Object[]} props.locationOptions
 * @param  {Node}     props.searchButton
 * @param  {Function} persistInputChange
 * @param  {boolean}  areColumnsStacked
 * @param  {boolean}  willLocationDropdownOpenAbove
 * @return {Object}
 */
export const getFormFieldMarkup = (
  {
    dateRangePickerLocaleCode,
    datesInputFocusedInput,
    datesInputValue,
    datesInputOnFocusChange,
    getIsDayBlocked,
    guestsInputValue,
    isShowingSummary,
    locationInputValue,
    locationOptions,
    searchButton,
  },
  persistInputChange,
  areColumnsStacked,
  willLocationDropdownOpenAbove
) => {
  const summaryColumnWidth = areColumnsStacked ? 'twelve' : 'three';
  const datePickerColumnWidth = areColumnsStacked ? 'twelve' : 'seven';
  const buttonColumnWidth = areColumnsStacked ? 'twelve' : 'four';
  const guestInputColumnWidth = areColumnsStacked ? 'twelve' : 'two';

  return (
    <Fragment>
      {!!isShowingSummary && (
        <Form.Field width={summaryColumnWidth}>
          <Icon
            isDisabled
            labelText="Property Summary"
            name={ICON_NAMES.HOME}
          />
        </Form.Field>
      )}
      {!!size(locationOptions) > 0 && (
        <Form.Field className="location-dropdown">
          <Dropdown
            icon={ICON_NAMES.MAP_PIN}
            label="Location"
            name="location"
            onChange={persistInputChange}
            options={locationOptions}
            value={locationInputValue}
            willOpenAbove={willLocationDropdownOpenAbove}
          />
        </Form.Field>
      )}
      <Form.Field width={datePickerColumnWidth}>
        <DateRangePicker
          endDatePlaceholderText="Check-out"
          focusedInput={datesInputFocusedInput}
          getIsDayBlocked={getIsDayBlocked}
          localeCode={dateRangePickerLocaleCode}
          name="dates"
          onChange={persistInputChange}
          onFocusChange={datesInputOnFocusChange}
          startDatePlaceholderText="Check-in"
          value={datesInputValue}
          willOpenAbove={willLocationDropdownOpenAbove}
        />
      </Form.Field>
      <Form.Field width={guestInputColumnWidth}>
        <NumberInput
          icon={ICON_NAMES.USERS}
          label="Guests"
          min={0}
          name="guests"
          onChange={persistInputChange}
          value={guestsInputValue}
        />
      </Form.Field>
      <Form.Field width={buttonColumnWidth}>{searchButton}</Form.Field>
    </Fragment>
  );
};
