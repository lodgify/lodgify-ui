import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';

console.log('Before import:');
console.log(Object.entries(global).length);
import 'react-dates/initialize';
console.log('After import:');
console.log(Object.entries(global).length);
import 'react-dates/lib/css/_datepicker.css';

/**
 * A date range picker lets a user pick a date range.
 * @return {Object}
 */
export const Component = () => <DateRangePicker />;

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
