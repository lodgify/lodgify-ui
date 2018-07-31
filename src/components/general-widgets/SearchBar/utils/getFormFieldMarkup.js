/* eslint react/prop-types: 0 */
import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';
import { DateRangePicker } from 'inputs/DateRangePicker';

/**
 * @param  {Object}   props
 * @param  {Boolean}  props.isShowingSummary
 * @param  {Boolean}  props.isShowingLocationDropdown
 * @param  {Function} props.getIsDayBlocked
 * @param  {Object[]} props.locationOptions
 * @param  {Object[]} props.guestsOptions
 * @param  {Node}     props.searchButton
 * @param  {Function} onDatePickerChange
 * @param  {Boolean}  areColumnsStacked
 * @return {Object}
 */
export const getFormFieldMarkup = (
  {
    isShowingSummary,
    isShowingLocationDropdown,
    getIsDayBlocked,
    locationOptions,
    guestsOptions,
    searchButton,
  },
  onDatePickerChange,
  areColumnsStacked
) => {
  const defaultColumnWidth = areColumnsStacked ? 'twelve' : 'three';
  const datePickerColumnWidth = areColumnsStacked ? 'twelve' : 'seven';

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
      {!!isShowingLocationDropdown && (
        <Form.Field width={defaultColumnWidth}>
          <Dropdown
            icon={ICON_NAMES.MAP_PIN}
            label="Location"
            name="location"
            onChange={onDatePickerChange}
            options={locationOptions}
          />
        </Form.Field>
      )}
      <Form.Field width={datePickerColumnWidth}>
        <DateRangePicker
          endDatePlaceholderText="Check-out"
          getIsDayBlocked={getIsDayBlocked}
          name="dates"
          onChange={onDatePickerChange}
          startDatePlaceholderText="Check-in"
        />
      </Form.Field>
      <Form.Field width={defaultColumnWidth}>
        <Dropdown
          icon={ICON_NAMES.USERS}
          label="Guests"
          name="guests"
          onChange={onDatePickerChange}
          options={guestsOptions}
        />
      </Form.Field>
      <Form.Field width={defaultColumnWidth}>{searchButton}</Form.Field>
    </Fragment>
  );
};
