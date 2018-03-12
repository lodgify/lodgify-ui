import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import { Icon } from 'semantic-ui-react';

import { InputController } from '../InputController';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

/**
 * A date range picker lets a user pick a date range.
 * @extends {React.PureComponent}
 */
export class Component extends PureComponent {
  state = {
    endDate: null,
    focusedInput: null,
    startDate: null,
  };

  render() {
    return (
      <InputController
        error={false}
        isFocused={!!this.state.focusedInput}
        isValid={false}
        label=""
        name="dateRangePicker"
        onChange={(name, value) => {
          console.log('DateRangePicker changed:', value);
          this.setState(value);
        }}
        tagName=""
      >
        <DateRangePicker
          customArrowIcon={<Icon name="arrow right" />}
          customInputIcon={<Icon name="calendar outline" size="large" />}
          daySize={52}
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          endDatePlaceholderText="Check-out"
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          hideKeyboardShortcutsPanel
          navNext={<Icon name="arrow right" />}
          navPrev={<Icon name="arrow left" />}
          onDatesChange={Function.prototype} // PropTypes.func.isRequired,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          startDatePlaceholderText="Check-in"
        />
      </InputController>
    );
  }
}

Component.displayName = 'DateRangePicker';

Component.defaultProps = {
  // isDisabled: false,
  // isPositionedRight: false,
  // isLoading: false,
};

Component.propTypes = {
  // /** The text to display on the button. */
  // children: PropTypes.string.isRequired,
  // /** Is the button disabled. */
  // isDisabled: PropTypes.bool,
  // /** Is the button in loading state. */
  // isLoading: PropTypes.bool,
  // /** Is the button positioned on the right hand side of its container. */
  // isPositionedRight: PropTypes.bool,
};
