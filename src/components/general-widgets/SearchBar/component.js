import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import { Form } from 'semantic-ui-react';
import { isEqual } from 'lodash';

import { CHECK_OUR_AVAILABILITY, SEARCH } from 'utils/default-strings';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { ICON_NAMES } from 'elements/Icon';
import { Button } from 'elements/Button';

import { getFormFieldMarkup } from './utils/getFormFieldMarkup';
import { getSearchBarModal } from './utils/getSearchBarModal';

/**
 * The standard widget for property search.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {};

  componentDidUpdate(previousProps, previousState) {
    !isEqual(previousState, this.state) && this.props.onChangeInput(this.state);
  }

  persistInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render = () => {
    const {
      className,
      datesInputInitialValue,
      guestsInputInitialValue,
      isDisplayedAsModal,
      isFixed,
      locationInputInitialValue,
      summaryElement,
      willDropdownsOpenAbove,
    } = this.props;

    const searchBarAsModal =
      isDisplayedAsModal &&
      getSearchBarModal(this.props, this.handleSubmit, this.persistInputChange);

    if (isFixed) {
      return (
        <div className={getClassNames(className, 'search-bar', 'is-fixed')}>
          <HorizontalGutters>
            <Grid>
              <GridRow verticalAlign="middle">
                <GridColumn width={5}>{summaryElement}</GridColumn>
                <GridColumn floated="right" width={7}>
                  {isDisplayedAsModal ? (
                    searchBarAsModal
                  ) : (
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                        {getFormFieldMarkup(
                          this.props,
                          this.persistInputChange,
                          false,
                          datesInputInitialValue,
                          guestsInputInitialValue,
                          locationInputInitialValue,
                          true
                        )}
                      </Form.Group>
                    </Form>
                  )}
                </GridColumn>
              </GridRow>
            </Grid>
          </HorizontalGutters>
        </div>
      );
    }

    if (isDisplayedAsModal) {
      return searchBarAsModal;
    }

    return (
      <div className={getClassNames(className, 'search-bar')}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            {getFormFieldMarkup(
              this.props,
              this.persistInputChange,
              false,
              datesInputInitialValue,
              guestsInputInitialValue,
              locationInputInitialValue,
              willDropdownsOpenAbove
            )}
          </Form.Group>
        </Form>
      </div>
    );
  };
}

Component.displayName = 'SearchBar';

Component.defaultProps = {
  className: null,
  datesInputInitialValue: undefined,
  dateRangePickerLocaleCode: undefined,
  getIsDayBlocked: Function.prototype,
  guestsInputInitialValue: undefined,
  isDisplayedAsModal: false,
  isFixed: false,
  isModalOpen: undefined,
  isShowingSummary: false,
  locationInputInitialValue: undefined,
  locationOptions: null,
  modalHeadingText: CHECK_OUR_AVAILABILITY,
  modalSummaryElement: null,
  onChangeInput: Function.prototype,
  onCloseModal: Function.prototype,
  onSubmit: Function.prototype,
  searchButton: (
    <Button icon={ICON_NAMES.SEARCH} isRounded>
      {SEARCH}
    </Button>
  ),
  summaryElement: null,
  willDropdownsOpenAbove: false,
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
  /** The initial value for the dates input. */
  datesInputInitialValue: PropTypes.shape({
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
  /** The initial value for the guests input. */
  guestsInputInitialValue: PropTypes.string,
  /** The options which the user can select in the guests field. */
  // eslint-disable-next-line react/no-unused-prop-types
  guestsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
  /** Is the Search Bar displayed in a modal*/
  isDisplayedAsModal: PropTypes.bool,
  /** Is the Search Bar fixed to the bottom of the window */
  isFixed: PropTypes.bool,
  /** Is the modal open. Used when consuming `SearchBar` as a controlled component. */
  // eslint-disable-next-line react/no-unused-prop-types
  isModalOpen: PropTypes.bool,
  /** Is Search Bar showing the Property Summary info. */
  // eslint-disable-next-line react/no-unused-prop-types
  isShowingSummary: PropTypes.bool,
  /** The initial value for the location input. */
  locationInputInitialValue: PropTypes.string,
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
  willDropdownsOpenAbove: PropTypes.bool,
};
