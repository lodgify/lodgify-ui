import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';

import { CHECK_OUR_AVAILABILITY, SEARCH } from 'utils/default-strings';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Button } from 'elements/Button';

import { getFormFieldMarkup } from './utils/getFormFieldMarkup';
import { getSearchBarModal } from './utils/getSearchBarModal';

/**
 * The standard widget for property search.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {};

  persistInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render = () => {
    const {
      isDisplayedAsModal,
      modalHeadingText,
      modalSummaryElement,
      modalTrigger,
      isFixed,
      summaryElement,
      willDropdownsOpenAbove,
    } = this.props;

    const searchBarAsModal =
      isDisplayedAsModal &&
      getSearchBarModal(
        modalHeadingText,
        modalTrigger,
        modalSummaryElement,
        this.handleSubmit,
        this.persistInputChange,
        this.props
      );

    if (isFixed) {
      return (
        <div
          className={cx('search-bar', {
            'is-fixed': isFixed,
          })}
        >
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
      <div className="search-bar">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            {getFormFieldMarkup(
              this.props,
              this.persistInputChange,
              false,
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
  getIsDayBlocked: Function.prototype,
  modalHeadingText: CHECK_OUR_AVAILABILITY,
  modalSummaryElement: null,
  modalTrigger: <Icon name={ICON_NAMES.SEARCH} />,
  onSubmit: Function.prototype,
  isDisplayedAsModal: false,
  isFixed: false,
  isShowingSummary: false,
  searchButton: (
    <Button icon={ICON_NAMES.SEARCH} isPositionedRight isRounded>
      {SEARCH}
    </Button>
  ),
  locationOptions: null,
  summaryElement: null,
  willDropdownsOpenAbove: false,
};
Component.propTypes = {
  /**
   * A function called for each day to be displayed in the DateRangePicker. Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  getIsDayBlocked: PropTypes.func,
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
  /** Is Search Bar showing the Property Summary info. */
  // eslint-disable-next-line react/no-unused-prop-types
  isShowingSummary: PropTypes.bool,
  /** The options which the user can select in the location field. */
  // eslint-disable-next-line react/no-unused-prop-types
  locationOptions: PropTypes.arrayOf(
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
  ),
  /** The heading text to display in the modal */
  modalHeadingText: PropTypes.string,
  /** The summary element to display in the mobile modal  */
  modalSummaryElement: PropTypes.node,
  /** The element to be clicked to display the modal. */
  modalTrigger: PropTypes.node,
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
