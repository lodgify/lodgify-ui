import React from 'react';

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
 * @param  {string}   props.locationInputValue
 * @param  {Object[]} props.locationOptions
 * @param  {Node}     props.searchButton
 * @param  {Function} persistInputChange
 * @param  {boolean}  willLocationDropdownOpenAbove
 * @return {Object}
 */
export const getFormFieldMarkup = (
  {
    /* eslint-disable react/prop-types */
    dateRangePickerLocaleCode,
    datesInputFocusedInput,
    datesInputValue,
    datesInputOnFocusChange,
    getIsDayBlocked,
    guestsInputValue,
    locationInputValue,
    locationOptions,
    searchButton,
    /* eslint-enable react/prop-types */
  },
  persistInputChange,
  willLocationDropdownOpenAbove
) => (
  <div className="inputs-container">
    {!!size(locationOptions) && (
      <div className="input-container location-input-container">
        <Dropdown
          icon={ICON_NAMES.MAP_PIN}
          label="Location"
          name="location"
          onChange={persistInputChange}
          options={locationOptions}
          value={locationInputValue}
          willOpenAbove={willLocationDropdownOpenAbove}
        />
      </div>
    )}
    <div className="input-container dates-input-container">
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
    </div>
    <div className="input-container guests-input-container">
      <NumberInput
        icon={<Icon name={ICON_NAMES.USERS} />}
        label="Guests"
        min={0}
        name="guests"
        onChange={persistInputChange}
        value={guestsInputValue}
      />
    </div>
    <div className="button-container">{searchButton}</div>
  </div>
);
