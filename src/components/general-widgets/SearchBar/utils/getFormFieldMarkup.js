/* eslint react/prop-types: 0 */
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';
import { size } from 'lodash';

import { Icon, ICON_NAMES } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';
import { DateRangePicker } from 'inputs/DateRangePicker';

/**
 * @param  {Object}   props
 * @param  {string}   props.dateRangePickerLocaleCode
 * @param  {Object}   props.datesInputInitialValue
 * @param  {Function} props.datesInputOnFocusChange
 * @param  {Function} props.getIsDayBlocked
 * @param  {Object[]} props.guestsOptions
 * @param  {string}   props.guestsInputInitialValue
 * @param  {boolean}  props.isShowingSummary
 * @param  {string}   props.locationInputInitialValue
 * @param  {Object[]} props.locationOptions
 * @param  {Node}     props.searchButton
 * @param  {Function} persistInputChange
 * @param  {boolean}  areColumnsStacked
 * @param  {boolean}  willDropdownsOpenAbove
 * @return {Object}
 */
export const getFormFieldMarkup = (
  {
    dateRangePickerLocaleCode,
    datesInputInitialValue,
    datesInputOnFocusChange,
    getIsDayBlocked,
    guestsInputInitialValue,
    guestsOptions,
    isShowingSummary,
    locationInputInitialValue,
    locationOptions,
    searchButton,
  },
  persistInputChange,
  areColumnsStacked,
  willDropdownsOpenAbove
) => {
  const defaultColumnWidth = areColumnsStacked ? 'twelve' : 'three';
  const datePickerColumnWidth = areColumnsStacked ? 'twelve' : 'seven';
  const buttonColumnWidth = areColumnsStacked ? 'twelve' : 'four';

  return (
    <Fragment>
      {!!isShowingSummary && (
        <Form.Field width={defaultColumnWidth}>
          <Icon
            isDisabled
            labelText="Property Summary"
            name={ICON_NAMES.HOME}
          />
        </Form.Field>
      )}
      {!!size(locationOptions) > 0 && (
        <Form.Field width={defaultColumnWidth}>
          <Dropdown
            icon={ICON_NAMES.MAP_PIN}
            initialValue={locationInputInitialValue}
            label="Location"
            name="location"
            onChange={persistInputChange}
            options={locationOptions}
            willOpenAbove={willDropdownsOpenAbove}
          />
        </Form.Field>
      )}
      <Form.Field width={datePickerColumnWidth}>
        <DateRangePicker
          endDatePlaceholderText="Check-out"
          getIsDayBlocked={getIsDayBlocked}
          initialValue={datesInputInitialValue}
          localeCode={dateRangePickerLocaleCode}
          name="dates"
          onChange={persistInputChange}
          onFocusChange={datesInputOnFocusChange}
          startDatePlaceholderText="Check-in"
          willOpenAbove={willDropdownsOpenAbove}
        />
      </Form.Field>
      <Form.Field width={defaultColumnWidth}>
        <Dropdown
          icon={ICON_NAMES.USERS}
          initialValue={guestsInputInitialValue}
          label="Guests"
          name="guests"
          onChange={persistInputChange}
          options={guestsOptions}
          willOpenAbove={willDropdownsOpenAbove}
        />
      </Form.Field>
      <Form.Field width={buttonColumnWidth}>{searchButton}</Form.Field>
    </Fragment>
  );
};
