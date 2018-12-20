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
 * @param  {boolean}  props.isShowingSummary
 * @param  {Function} props.getIsDayBlocked
 * @param  {Object[]} props.locationOptions
 * @param  {Object[]} props.guestsOptions
 * @param  {Node}     props.searchButton
 * @param  {Function} onDatePickerChange
 * @param  {boolean}  areColumnsStacked
 * @param  {boolean}  willDropdownsOpenAbove
 * @return {Object}
 */
export const getFormFieldMarkup = (
  {
    dateRangePickerLocaleCode,
    isShowingSummary,
    getIsDayBlocked,
    locationOptions,
    guestsOptions,
    searchButton,
  },
  onDatePickerChange,
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
            label="Location"
            name="location"
            onChange={onDatePickerChange}
            options={locationOptions}
            willOpenAbove={willDropdownsOpenAbove}
          />
        </Form.Field>
      )}
      <Form.Field width={datePickerColumnWidth}>
        <DateRangePicker
          endDatePlaceholderText="Check-out"
          getIsDayBlocked={getIsDayBlocked}
          localeCode={dateRangePickerLocaleCode}
          name="dates"
          onChange={onDatePickerChange}
          startDatePlaceholderText="Check-in"
          willOpenAbove={willDropdownsOpenAbove}
        />
      </Form.Field>
      <Form.Field width={defaultColumnWidth}>
        <Dropdown
          icon={ICON_NAMES.USERS}
          label="Guests"
          name="guests"
          onChange={onDatePickerChange}
          options={guestsOptions}
          willOpenAbove={willDropdownsOpenAbove}
        />
      </Form.Field>
      <Form.Field width={buttonColumnWidth}>{searchButton}</Form.Field>
    </Fragment>
  );
};
