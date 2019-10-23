import React from 'react';
import {
  string,
  func,
  arrayOf,
  shape,
  oneOf,
  oneOfType,
  bool,
  number,
  object,
  node,
} from 'prop-types';

import { Button } from 'elements/Button';
import { size } from 'utils/size';
import {
  CHECK_IN,
  CHECK_OUT,
  GUESTS,
  LOCATION,
  SEARCH,
} from 'utils/default-strings';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';
import { NumberInput } from 'inputs/NumberInput';
import { DateRangePicker } from 'inputs/DateRangePicker';

export const Component = ({
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
  locationInputValue,
  datesInputValue,
  guestsInputValue,
  onInputChange,
  willLocationDropdownOpenAbove,
}) => (
  <div className="inputs-container">
    {!!size(locationOptions) && (
      <div className="input-container location-input-container">
        <Dropdown
          icon={ICON_NAMES.MAP_PIN}
          label={locationInputLabel}
          name="location"
          onChange={onInputChange}
          options={locationOptions}
          value={locationInputValue}
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
        onChange={onInputChange}
        onFocusChange={datesInputOnFocusChange}
        startDatePlaceholderText={datesCheckInLabel}
        value={datesInputValue}
        willOpenAbove={willLocationDropdownOpenAbove}
      />
    </div>
    <div className="input-container guests-input-container">
      <NumberInput
        icon={<Icon name={ICON_NAMES.USERS} />}
        label={guestsInputLabel}
        min={0}
        name="guests"
        onChange={onInputChange}
        value={guestsInputValue}
      />
    </div>
    <div className="button-container">{searchButton}</div>
  </div>
);

Component.displayName = 'SearchFields';

Component.defaultProps = {
  dateRangePickerLocaleCode: undefined,
  datesCheckInLabel: CHECK_IN,
  datesCheckOutLabel: CHECK_OUT,
  datesInputFocusedInput: undefined,
  datesInputOnFocusChange: Function.prototype,
  datesInputValue: undefined,
  getIsDayBlocked: Function.prototype,
  guestsInputLabel: GUESTS,
  guestsInputValue: undefined,
  isDateRangePickerLoading: undefined,
  locationInputLabel: LOCATION,
  locationInputValue: undefined,
  locationOptions: null,
  searchButton: (
    <Button icon={ICON_NAMES.SEARCH} isFormSubmit isRounded>
      {SEARCH}
    </Button>
  ),
  willLocationDropdownOpenAbove: false,
  onInputChange: Function.prototype,
};

Component.propTypes = {
  dateRangePickerLocaleCode: string,
  datesCheckInLabel: string,
  datesCheckOutLabel: string,
  datesInputFocusedInput: string,
  datesInputOnFocusChange: func,
  datesInputValue: shape({
    endDate: object,
    startDate: object,
  }),
  getIsDayBlocked: func,
  guestsInputLabel: string,
  guestsInputValue: oneOfType([string, number]),
  isDateRangePickerLoading: bool,
  locationInputLabel: string,
  locationInputValue: string,
  locationOptions: arrayOf(
    shape({
      /** The indent level of a location option. One of: 0, 1, 2, 3, 4, 5 */
      indent: oneOf([0, 1, 2, 3, 4, 5]),
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  onInputChange: func,
  searchButton: node,
  willLocationDropdownOpenAbove: bool,
};
