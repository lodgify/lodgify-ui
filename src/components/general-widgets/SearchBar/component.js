import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Form, Modal as SemanticModal } from 'semantic-ui-react';

import { Container } from 'layout/Container';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Heading } from 'typography/Heading';
import { Modal } from 'elements/Modal';
import { Button } from 'elements/Button';

import { getFormFieldMarkup } from './utils/getFormFieldMarkup';

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
      isSticky,
      modalTrigger,
      isFixed,
      summaryElement,
    } = this.props;

    if (isDisplayedAsModal) {
      return (
        <Modal trigger={modalTrigger}>
          <SemanticModal.Content>
            <Heading size="small">Check our availability</Heading>
            <Form onSubmit={this.handleSubmit}>
              {getFormFieldMarkup(this.props, this.persistInputChange, true)}
            </Form>
          </SemanticModal.Content>
        </Modal>
      );
    }

    if (isFixed) {
      return (
        <div
          className={cx('search-bar', {
            'is-fixed': isFixed,
          })}
        >
          <Container as={Grid}>
            <GridRow verticalAlign="middle">
              <GridColumn width={5}>{summaryElement}</GridColumn>
              <GridColumn as={Form} onSubmit={this.handleSubmit} width={7}>
                <Form.Group>
                  {getFormFieldMarkup(
                    this.props,
                    this.persistInputChange,
                    false
                  )}
                </Form.Group>
              </GridColumn>
            </GridRow>
          </Container>
        </div>
      );
    }

    return (
      <div className={cx('search-bar', { 'is-sticky': isSticky })}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            {getFormFieldMarkup(this.props, this.persistInputChange, false)}
          </Form.Group>
        </Form>
      </div>
    );
  };
}

Component.displayName = 'SearchBar';

Component.defaultProps = {
  getIsDayBlocked: Function.prototype,
  modalTrigger: <Icon name={ICON_NAMES.SEARCH} />,
  onSubmit: Function.prototype,
  isDisplayedAsModal: false,
  isFixed: false,
  isShowingSummary: false,
  isShowingLocationDropdown: true,
  isSticky: false,
  searchButton: (
    <Button icon={ICON_NAMES.SEARCH} isPositionedRight isRounded>
      Search
    </Button>
  ),
  summaryElement: <div />,
};
/* eslint react/no-unused-prop-types: 0 */
Component.propTypes = {
  /**
   * A function called for each day to be displayed in the DateRangePicker. Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns{boolean}     - Is the day blocked.
   */
  getIsDayBlocked: PropTypes.func,
  /** The options which the user can select in the guests field. */
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
  /** Should the Search Bar be fixed to the window */
  isFixed: PropTypes.bool,
  /** Is Search Bar showing the Location Dropdown. */
  isShowingLocationDropdown: PropTypes.bool,
  /** Is Search Bar showing the Property Summary info. */
  isShowingSummary: PropTypes.bool,
  /** Is Search Bar going to render in sticky mode. */
  isSticky: PropTypes.bool,
  /** The options which the user can select in the location field. */
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
  ).isRequired,
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
  searchButton: PropTypes.node,
  /** The element to display in the fixed container */
  summaryElement: PropTypes.node,
};
