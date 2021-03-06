import moment from 'moment';
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { debounce } from 'debounce';
import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';

import { getUpOrDownFromBoolean } from 'utils/get-up-or-down-from-boolean';
import { withResponsive } from 'utils/with-responsive';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { InputController } from 'inputs/InputController';
import { isBlurEvent } from 'utils/is-blur-event';
import { returnFirstArgument } from 'utils/return-first-argument';
import { getWindowHeight } from 'utils/get-window-height';
import { isDisplayedAsModal } from 'utils/is-displayed-as-modal';

import { getIsFocusControlled } from './utils/getIsFocusControlled';
import { mapValueToProps } from './utils/mapValueToProps';
import { getNumberOfMonths } from './utils/getNumberOfMonths';
import { getIsVisible } from './utils/getIsVisible';
import {
  MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR,
  LOADING_PLACEHOLDER_TEXT,
} from './constants';

/**
 * A date range picker lets a user pick a date range.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
class Component extends PureComponent {
  state = {
    endDateId: uuid(),
    startDateId: uuid(),
    focusedInput: null,
    windowHeight: null,
  };

  componentDidMount = () => {
    moment.locale(this.props.localeCode);
    this.handleHeightChange();
    global.addEventListener('resize', this.handleHeightChange);
  };

  componentDidUpdate = (previousProps, previousState) => {
    const isFocusControlled = getIsFocusControlled(this.props.focusedInput);
    const { focusedInput: previousFocusedInput } = isFocusControlled
      ? previousProps
      : previousState;
    const { focusedInput } = isFocusControlled ? this.props : this.state;
    const { onBlur, onFocusChange } = this.props;

    isBlurEvent(previousFocusedInput, focusedInput) && onBlur();

    if (isFocusControlled) return;

    previousFocusedInput !== focusedInput && onFocusChange(focusedInput);
  };

  componentWillUnmount = () => {
    global.removeEventListener('resize', this.handleHeightChange);
  };

  createRef = ref => {
    this.visibilityCheck = ref;
  };

  handleFocusChange = focusedInput => {
    if (
      !isDisplayedAsModal(this.state.windowHeight) &&
      !getIsVisible(this.visibilityCheck)
    )
      return;

    getIsFocusControlled(this.props.focusedInput)
      ? this.props.onFocusChange(focusedInput)
      : this.setState({ focusedInput });
  };

  handleHeightChange = debounce(() => {
    const windowHeight = getWindowHeight();

    if (windowHeight !== this.state.windowHeight) {
      this.setState({
        windowHeight,
      });
    }
  });

  render() {
    const {
      displayFormat,
      endDatePlaceholderText,
      error,
      getIsDayBlocked,
      initialValue,
      isLoading,
      isValid,
      name,
      onChange,
      startDatePlaceholderText,
      value,
      willOpenAbove,
      windowInnerWidth,
      isCalendarIconDisplayed,
    } = this.props;
    const { endDateId, startDateId } = this.state;
    const { focusedInput } = getIsFocusControlled(this.props.focusedInput)
      ? this.props
      : this.state;

    return (
      <Fragment>
        <InputController
          adaptOnChangeEvent={returnFirstArgument}
          error={error}
          initialValue={initialValue}
          inputOnChangeFunctionName="onDatesChange"
          isFocused={!!focusedInput}
          isValid={isValid}
          mapValueToProps={mapValueToProps}
          name={name}
          onChange={onChange}
          value={value}
        >
          <DateRangePicker
            /* eslint-disable react/jsx-sort-props */
            // Consumer defined props.
            displayFormat={displayFormat}
            endDatePlaceholderText={
              isLoading ? LOADING_PLACEHOLDER_TEXT : endDatePlaceholderText
            }
            isDayBlocked={getIsDayBlocked}
            openDirection={getUpOrDownFromBoolean(willOpenAbove)}
            startDatePlaceholderText={
              isLoading ? LOADING_PLACEHOLDER_TEXT : startDatePlaceholderText
            }
            // Controlled props
            focusedInput={focusedInput}
            // NOTE onDatesChange is required by DateRangePicker but is set in `InputController`
            onDatesChange={Function.prototype}
            onFocusChange={this.handleFocusChange}
            // Static required props.
            endDateId={endDateId}
            startDateId={startDateId}
            // Static custom appearance props.
            customArrowIcon={
              isLoading ? (
                <Icon name={ICON_NAMES.SPINNER} />
              ) : (
                <Icon name={ICON_NAMES.ARROW_RIGHT} />
              )
            }
            disabled={isLoading}
            customInputIcon={
              isCalendarIconDisplayed ? (
                <Icon name={ICON_NAMES.CALENDAR} />
              ) : (
                undefined
              )
            }
            daySize={52}
            hideKeyboardShortcutsPanel
            navNext={<Icon name={ICON_NAMES.ARROW_RIGHT} />}
            navPrev={<Icon name={ICON_NAMES.ARROW_LEFT} />}
            numberOfMonths={getNumberOfMonths(windowInnerWidth)}
            withPortal={isDisplayedAsModal(this.state.windowHeight)}
            showClearDates
            /* eslint-enable react/jsx-sort-props */
          />
        </InputController>
        <div ref={this.createRef} />
      </Fragment>
    );
  }
}

Component.displayName = 'DateRangePicker';

Component.defaultProps = {
  displayFormat: 'DD/MM/YYYY',
  endDatePlaceholderText: '',
  error: false,
  focusedInput: undefined,
  getIsDayBlocked: Function.prototype,
  initialValue: undefined,
  isCalendarIconDisplayed: true,
  isLoading: false,
  isValid: false,
  localeCode: 'en',
  name: '',
  onBlur: Function.prototype,
  onChange: Function.prototype,
  onFocusChange: Function.prototype,
  startDatePlaceholderText: '',
  value: undefined,
  willOpenAbove: false,
  windowInnerWidth: MAXIMUM_SCREEN_WIDTH_FOR_TWO_MONTH_CALENDAR,
};

Component.propTypes = {
  /** The format for inputting and displaying dates as text. */
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** The visible placeholder text for the end date input. */
  endDatePlaceholderText: PropTypes.string,
  /** Is the date range picker in an error state. A string is displayed as an error message. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** The input field which is currently focused where the input is consumed as a controlled component. */
  focusedInput: PropTypes.oneOf([null, 'startDate', 'endDate']),
  /**
   * A function called for each day to be displayed. Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  getIsDayBlocked: PropTypes.func,
  /** The initial value of the input. */
  initialValue: PropTypes.shape({
    endDate: PropTypes.object,
    startDate: PropTypes.object,
  }),
  /** Is the calendar icon in input showing.  */
  isCalendarIconDisplayed: PropTypes.bool,
  /** Is the date range picker in a loading state. */
  isLoading: PropTypes.bool,
  /** Is the date range picker in a valid state. */
  isValid: PropTypes.bool,
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year. */
  localeCode: PropTypes.string,
  /** The name for the date range picker. */
  name: PropTypes.string,
  /**
   * Used internally by `Form` so ignored in the styleguide.
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * A function called when the date range picker value changes. Dates are wrapped as [Moment objects](https://momentjs.com/docs/#/parsing/).
   * @param {String} name   - `this.props.name`
   * @param {Object} value
   * @param {Moment} value.endDate
   * @param {Moment} value.startDate
   */
  onChange: PropTypes.func,
  /**
   * A function called when the focus state of the date range picker changes.
   * @param {String} inputName
   */
  onFocusChange: PropTypes.func,
  /** The visible placeholder text for the start date input. */
  startDatePlaceholderText: PropTypes.string,
  /** The current value of the input where it is consumed as a controlled component. */
  value: PropTypes.shape({
    endDate: PropTypes.object,
    startDate: PropTypes.object,
  }),
  /** Will the calendar open above the input. */
  willOpenAbove: PropTypes.bool,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  windowInnerWidth: PropTypes.number,
};

export const ComponentWithResponsive = withResponsive(Component);
