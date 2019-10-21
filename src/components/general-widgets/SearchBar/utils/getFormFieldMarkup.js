import React from 'react';

import { size } from 'utils/size';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';
import { NumberInput } from 'inputs/NumberInput';
import { DateRangePicker } from 'inputs/DateRangePicker';

/**
 * @param  {Object}   props
 * @param  {string}   props.dateRangePickerLocaleCode
 * @param  {Function} props.datesInputOnFocusChange
 * @param  {Function} props.getIsDayBlocked
 * @param  {Object[]} props.locationOptions
 * @param  {Node}     props.searchButton
 * @param  {Object} state
 * @param  {string} state.location
 * @param  {Object} state.dates
 * @param  {number} state.guests
 * @param  {Function} persistInputChange
 * @param  {boolean} willLocationDropdownOpenAbove
 * @return {Object}
 */
export const getFormFieldMarkup = (
  {
    /* eslint-disable react/prop-types */
    dateRangePickerLocaleCode,
    datesCheckInLabel,
    datesCheckOutLabel,
    datesInputFocusedInput,
    datesInputOnFocusChange,
    getIsDayBlocked,
    guestsInputLabel,
    isDateRangePickerLoading,
    locationInputLabel,
    locationOptions,
    searchButton,
    /* eslint-enable react/prop-types */
  },
  { location, dates, guests },
  persistInputChange,
  willLocationDropdownOpenAbove
) => (
  <div className="inputs-container">
    {!!size(locationOptions) && (
      <div className="input-container location-input-container">
        <Dropdown
          icon={ICON_NAMES.MAP_PIN}
          label={locationInputLabel}
          name="location"
          onChange={persistInputChange}
          options={locationOptions}
          value={location}
          willOpenAbove={willLocationDropdownOpenAbove}
        />
      </div>
    )}
    <div className="input-container dates-input-container">
      <DateRangePicker
        endDatePlaceholderText={datesCheckOutLabel}
        focusedInput={datesInputFocusedInput}
        getIsDayBlocked={getIsDayBlocked}
        isLoading={isDateRangePickerLoading}
        localeCode={dateRangePickerLocaleCode}
        name="dates"
        onChange={persistInputChange}
        onFocusChange={datesInputOnFocusChange}
        startDatePlaceholderText={datesCheckInLabel}
        value={dates}
        willOpenAbove={willLocationDropdownOpenAbove}
      />
    </div>
    <div className="input-container guests-input-container">
      <NumberInput
        icon={<Icon name={ICON_NAMES.USERS} />}
        label={guestsInputLabel}
        min={0}
        name="guests"
        onChange={persistInputChange}
        value={guests}
      />
    </div>
    <div className="button-container">{searchButton}</div>
  </div>
);
