import 'semantic-ui-styles/react-dates-datepicker.less';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/initialize';

import { returnFirstArgument } from 'utils/return-first-argument';
import { isBlurEvent } from 'utils/is-blur-event';
import { getUpOrDownFromBoolean } from 'utils/get-up-or-down-from-boolean';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { InputController } from 'inputs/InputController';
import { getWindowHeight } from 'utils/get-window-height';
import { isDisplayedAsModal } from 'utils/is-displayed-as-modal';

import { mapValueToProps } from './utils/mapValueToProps';

/**
 * A single date picker lets a user pick a date.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isFocused: null,
    windowHeight: null,
  };

  componentDidMount = () => {
    this.handleHeightChange();
    global.addEventListener('resize', debounce(this.handleHeightChange, 150));
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { isFocused: prevIsFocused } = prevState;
    const { isFocused } = this.state;
    const { onBlur } = this.props;

    isBlurEvent(prevIsFocused, isFocused) && onBlur();
  };

  handleFocusChange = ({ focused }) => {
    this.setState({ isFocused: focused });
  };

  handleHeightChange = () => {
    const windowHeight = getWindowHeight();

    if (windowHeight !== this.state.windowHeight) {
      this.setState({
        windowHeight,
      });
    }
  };

  render = () => {
    const {
      displayFormat,
      error,
      getIsDayBlocked,
      isValid,
      name,
      onChange,
      value,
      willOpenAbove,
      placeholderText,
    } = this.props;
    const { isFocused } = this.state;

    return (
      <InputController
        adaptOnChangeEvent={returnFirstArgument}
        error={error}
        initialValue={null}
        inputOnChangeFunctionName="onDateChange"
        isFocused={!!isFocused}
        isValid={isValid}
        mapValueToProps={mapValueToProps}
        name={name}
        onChange={onChange}
        value={value}
      >
        <SingleDatePicker
          /* eslint-disable react/jsx-sort-props */
          // Consumer defined props.
          displayFormat={displayFormat}
          isDayBlocked={getIsDayBlocked}
          openDirection={getUpOrDownFromBoolean(willOpenAbove)}
          placeholder={placeholderText}
          // Controlled props
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
          withPortal={isDisplayedAsModal(this.state.windowHeight)}
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
  onBlur: Function.prototype,
  onChange: Function.prototype,
  placeholderText: '',
  value: undefined,
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
   * @returns{boolean}     - Is the day blocked.
   */
  getIsDayBlocked: PropTypes.func,
  /** Is the single date picker in a valid state. */
  isValid: PropTypes.bool,
  /** The name for the single date picker. */
  name: PropTypes.string,
  /**
   * Used internally by `Form` so ignored in the styleguide.
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * A function called when the single date picker value changes. Dates are wrapped as [Moment objects](https://momentjs.com/docs/#/parsing/).
   * @param {String} name   - `this.props.name`
   * @param {Moment} value
   */
  onChange: PropTypes.func,
  /** The visible placeholder text for the date input. */
  placeholderText: PropTypes.string,
  /** The current value of the input where it is consumed as a controlled component. */
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  /** Will the calendar open above the input. */
  willOpenAbove: PropTypes.bool,
};
