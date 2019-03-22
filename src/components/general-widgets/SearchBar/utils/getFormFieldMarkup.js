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
 * @param  {Object}   props.datesInputValue
 * @param  {Function} props.datesInputOnFocusChange
 * @param  {Function} props.getIsDayBlocked
 * @param  {Object[]} props.guestsOptions
 * @param  {string}   props.guestsInputValue
 * @param  {boolean}  props.isShowingSummary
 * @param  {string}   props.locationInputValue
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
    datesInputValue,
    datesInputOnFocusChange,
    getIsDayBlocked,
    guestsInputValue,
    guestsOptions,
    isShowingSummary,
    locationInputValue,
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
            label="Location"
            name="location"
            onChange={persistInputChange}
            options={locationOptions}
            value={locationInputValue}
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
          onChange={persistInputChange}
          onFocusChange={datesInputOnFocusChange}
          startDatePlaceholderText="Check-in"
          value={datesInputValue}
          willOpenAbove={willDropdownsOpenAbove}
        />
      </Form.Field>
      <Form.Field width={defaultColumnWidth}>
        <Dropdown
          icon={ICON_NAMES.USERS}
          label="Guests"
          name="guests"
          onChange={persistInputChange}
          options={guestsOptions}
          value={guestsInputValue}
          willOpenAbove={willDropdownsOpenAbove}
        />
      </Form.Field>
      <Form.Field width={buttonColumnWidth}>{searchButton}</Form.Field>
    </Fragment>
  );
};
