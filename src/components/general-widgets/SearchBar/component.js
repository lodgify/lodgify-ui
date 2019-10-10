import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import { Form } from 'semantic-ui-react';
import { debounce } from 'debounce';
import isEqual from 'fast-deep-equal';

import { HorizontalGutters } from 'layout/HorizontalGutters';
import { ShowOn } from 'layout/ShowOn';
import { CHECK_OUR_AVAILABILITY, SEARCH } from 'utils/default-strings';
import { ICON_NAMES } from 'elements/Icon';
import { Button } from 'elements/Button';
import { CHECK_IN, CHECK_OUT, GUESTS, LOCATION } from 'utils/default-strings';

import { getInitialValue } from './utils/getInitialValue';
import { getWillLocationDropdownOpenAbove } from './utils/getWillLocationDropdownOpenAbove';
import { getFormFieldMarkup } from './utils/getFormFieldMarkup';
import { getSearchBarModal } from './utils/getSearchBarModal';

/**
 * The standard widget for property search.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    dates: getInitialValue(this.props.datesInputValue),
    guests: getInitialValue(this.props.guestsInputValue),
    location: getInitialValue(this.props.locationInputValue),
    willLocationDropdownOpenAbove: this.props.willLocationDropdownOpenAbove,
  };

  componentDidMount = () => {
    if (this.props.isDisplayedAsModal) return;
    global.document.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  };

  componentDidUpdate(previousProps, previousState) {
    const previousInputValueProps = {
      dates: previousProps.datesInputValue,
      guests: previousProps.guestsInputValue,
      location: previousProps.locationInputValue,
    };

    const currentInputValueProps = {
      dates: this.props.datesInputValue,
      guests: this.props.guestsInputValue,
      location: this.props.locationInputValue,
    };

    if (!isEqual(previousInputValueProps, currentInputValueProps)) {
      this.setState(currentInputValueProps);
    }

    !isEqual(previousState, this.state) && this.props.onChangeInput(this.state);
  }

  componentWillUnmount = () => {
    if (this.props.isDisplayedAsModal) return;
    global.document.removeEventListener('scroll', this.handleScroll);
  };

  createRef = container => {
    this.container = container;
  };

  handleScroll = debounce(() => {
    this.setState({
      willLocationDropdownOpenAbove: getWillLocationDropdownOpenAbove(
        this.container,
        this.props.willLocationDropdownOpenAbove
      ),
    });
  }, 100);

  persistInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render = () => {
    const {
      className,
      isDisplayedAsModal,
      isFixed,
      isStackable,
      summaryElement,
    } = this.props;

    return isDisplayedAsModal ? (
      getSearchBarModal(this.props, this.handleSubmit, this.persistInputChange)
    ) : (
      <div
        className={getClassNames(className, 'search-bar', {
          'is-fixed': isFixed,
          'is-stackable': isStackable,
        })}
        ref={this.createRef}
      >
        {isFixed ? (
          <HorizontalGutters>
            {summaryElement}
            <ShowOn computer widescreen>
              <Form onSubmit={this.handleSubmit}>
                {getFormFieldMarkup(this.props, this.persistInputChange, true)}
              </Form>
            </ShowOn>
            <ShowOn mobile tablet>
              {getSearchBarModal(
                this.props,
                this.handleSubmit,
                this.persistInputChange
              )}
            </ShowOn>
          </HorizontalGutters>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            {getFormFieldMarkup(
              this.props,
              this.persistInputChange,
              this.state.willLocationDropdownOpenAbove
            )}
          </Form>
        )}
      </div>
    );
  };
}

Component.displayName = 'SearchBar';

Component.defaultProps = {
  className: null,
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
  isDisplayedAsModal: false,
  isFixed: false,
  isModalOpen: undefined,
  isStackable: false,
  locationInputLabel: LOCATION,
  locationInputValue: undefined,
  locationOptions: null,
  modalHeadingText: CHECK_OUR_AVAILABILITY,
  modalSummaryElement: null,
  onChangeInput: Function.prototype,
  onCloseModal: Function.prototype,
  onSubmit: Function.prototype,
  searchButton: (
    <Button icon={ICON_NAMES.SEARCH} isFormSubmit isRounded>
      {SEARCH}
    </Button>
  ),
  summaryElement: null,
  willLocationDropdownOpenAbove: false,
};

Component.propTypes = {
  /**
   * Custom class name.
   * Provided by `ShowOn` so ignored in the styleguide.
   * @ignore
   */
  className: PropTypes.string,
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year in the date range picker. */
  // eslint-disable-next-line react/no-unused-prop-types
  dateRangePickerLocaleCode: PropTypes.string,
  /** The label that goes inside the date range pickers check in input when there is no value selected. */
  // eslint-disable-next-line react/no-unused-prop-types
  datesCheckInLabel: PropTypes.string,
  /** The label that goes inside the date range pickers check out input when there is not value selected. */
  // eslint-disable-next-line react/no-unused-prop-types
  datesCheckOutLabel: PropTypes.string,
  /** The field of the dates input which is currently focused. Used when consuming `SearchBar` as a controlled component. */
  // eslint-disable-next-line react/no-unused-prop-types
  datesInputFocusedInput: PropTypes.oneOf([null, 'startDate', 'endDate']),
  /**
   * A function called when the focus state of the dates input changes.
   * @param {String} inputName
   */
  // eslint-disable-next-line react/no-unused-prop-types
  datesInputOnFocusChange: PropTypes.func,
  /** The value for the dates input. Used when consuming `SearchBar` as a controlled component. */
  datesInputValue: PropTypes.shape({
    endDate: PropTypes.object,
    startDate: PropTypes.object,
  }),
  /**
   * A function called for each day to be displayed in the DateRangePicker. Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  getIsDayBlocked: PropTypes.func,
  /** The label that goes inside the guests input when there is no value. */
  // eslint-disable-next-line react/no-unused-prop-types
  guestsInputLabel: PropTypes.string,
  /** The value for the guests input. Used when consuming `SearchBar` as a controlled component. */
  guestsInputValue: PropTypes.number,
  /** Is the date range picker in loading state. */
  // eslint-disable-next-line react/no-unused-prop-types
  isDateRangePickerLoading: PropTypes.bool,
  /** Is the Search Bar displayed in a modal*/
  isDisplayedAsModal: PropTypes.bool,
  /** Is the Search Bar fixed to the bottom of the window */
  isFixed: PropTypes.bool,
  /** Is the modal open. Used when consuming `SearchBar` as a controlled component. */
  // eslint-disable-next-line react/no-unused-prop-types
  isModalOpen: PropTypes.bool,
  /** Do the inputs stack one on top of the other on smaller devices. */
  isStackable: PropTypes.bool,
  /** The label that goes inside the location dropdown input when there is no option selected. */
  // eslint-disable-next-line react/no-unused-prop-types
  locationInputLabel: PropTypes.string,
  /** The value for the location input. Used when consuming `SearchBar` as a controlled component. */
  locationInputValue: PropTypes.string,
  /** The options which the user can select in the location field. */
  // eslint-disable-next-line react/no-unused-prop-types
  locationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The indent level of a location option. One of: 0, 1, 2, 3, 4, 5 */
      indent: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
  /** The heading text to display in the modal */
  // eslint-disable-next-line react/no-unused-prop-types
  modalHeadingText: PropTypes.string,
  /** The summary element to display in the mobile modal  */
  // eslint-disable-next-line react/no-unused-prop-types
  modalSummaryElement: PropTypes.node,
  /** A function called when a change in an input occurs.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  onChangeInput: PropTypes.func,
  /** A function called when a close event happens on the modal. Used when consuming `SearchBar` as a controlled component. */
  // eslint-disable-next-line react/no-unused-prop-types
  onCloseModal: PropTypes.func,
  /** The function to call when the search bar is submitted.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  onSubmit: PropTypes.func,
  /** The Search Button the Search Bar displays. */
  // eslint-disable-next-line react/no-unused-prop-types
  searchButton: PropTypes.node,
  /** The element to display in the fixed container */
  summaryElement: PropTypes.node,
  /** The dropdowns will open above the search bar. */
  willLocationDropdownOpenAbove: PropTypes.bool,
};
