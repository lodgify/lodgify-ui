import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

import { getUpOrDownFromBoolean } from 'utils/get-up-or-down-from-boolean';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { InputController } from 'inputs/InputController';

import { pickDateFromState } from './utils/pickDateFromState';

/**
 * A single date picker lets a user pick a date.
 * @extends {React.PureComponent}
 */
export class Component extends PureComponent {
  state = {
    date: null,
    isFocused: null,
  };

  /**
   * Call `props.onChange` with the new date from state.
   */
  componentDidUpdate = (prevProps, prevState) => {
    const prevDate = pickDateFromState(prevState);
    const date = pickDateFromState(this.state);
    const { name, onChange } = this.props;
    !isEqual(prevDate, date) && onChange(name, date);
  };

  /**
   * Persist the focused input identifier in component state.
   */
  handleFocusChange = ({ focused }) => this.setState({ isFocused: focused });

  /**
   * Persist the date value in component state.
   */
  handleInputControllerChange = (name, value) => {
    this.setState({ date: value });
  };

  render = () => {
    const {
      displayFormat,
      error,
      getIsDayBlocked,
      isValid,
      name,
      willOpenAbove,
      placeholderText,
    } = this.props;
    const { date, isFocused } = this.state;
    return (
      <InputController
        error={error}
        inputOnChangeFunctionName="onDateChange"
        isFocused={!!isFocused}
        isValid={isValid}
        name={name}
        onChange={this.handleInputControllerChange}
      >
        <SingleDatePicker
          /* eslint-disable react/jsx-sort-props */
          // Consumer defined props.
          displayFormat={displayFormat}
          isDayBlocked={getIsDayBlocked}
          openDirection={getUpOrDownFromBoolean(willOpenAbove)}
          placeholder={placeholderText}
          // Controlled props
          date={date}
          focused={isFocused}
          // NOTE onDateChange is required by SingleDatePicker but is set in `InputController`
          onDateChange={Function.prototype}
          onFocusChange={this.handleFocusChange}
          // Static custom appearance props.
          customInputIcon={<Icon name={ICON_NAMES.CALENDAR} />}
          daySize={52}
          hideKeyboardShortcutsPanel
          navNext={<Icon name={ICON_NAMES.ARROW_RIGHT} />}
          navPrev={<Icon name={ICON_NAMES.ARROW_LEFT} />}
          numberOfMonths={1}
          /* eslint-enable react/jsx-sort-props */
        />
      </InputController>
    );
  };
}

Component.displayName = 'SingleDatePicker';

Component.defaultProps = {
  displayFormat: 'DD/MM/YYYY',
  error: false,
  getIsDayBlocked: Function.prototype,
  isValid: false,
  name: '',
  onChange: Function.prototype,
  placeholderText: '',
  willOpenAbove: false,
};

Component.propTypes = {
  /** The format for inputting and displaying the date as text. */
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Is the single date picker in an error state. A string is displayed as an error message. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * A function called for each day to be displayed. Returning true blocks that day in the single date picker.
   * @param   {Moment}  day - The day to test.
   * @returns {Boolean}     - Is the day blocked.
   */
  getIsDayBlocked: PropTypes.func,
  /** Is the single date picker in a valid state. */
  isValid: PropTypes.bool,
  /** The name for the single date picker. */
  name: PropTypes.string,
  /**
   * A function called when the single date picker value changes. Dates are wrapped as [Moment objects](https://momentjs.com/docs/#/parsing/).
   * @param {String} name   - `this.props.name`
   * @param {Moment} value
   */
  onChange: PropTypes.func,
  /** The visible placeholder text for the date input. */
  placeholderText: PropTypes.string,
  /** Will the calendar open above the input. */
  willOpenAbove: PropTypes.bool,
};
