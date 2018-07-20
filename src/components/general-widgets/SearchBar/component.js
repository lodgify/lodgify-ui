import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Form, Modal as SemanticModal } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';
import { Heading } from 'typography/Heading';
import { Modal } from 'elements/Modal';
import { Button } from 'elements/Button';

import { getFormFieldMarkup } from './utils/getFormFieldMarkup';

/**
 * The standard widget for property search.
 * @extends {React.PureComponent}
 */
export class Component extends PureComponent {
  state = {};

  persistInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render = () => {
    const { isDisplayedAsModal, isSticky, modalTrigger } = this.props;

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

    return (
      <div className={cx({ 'is-sticky': isSticky })}>
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
  modalTrigger: <Icon name="search" />,
  onSubmit: Function.prototype,
  isDisplayedAsModal: false,
  isShowingSummary: false,
  isShowingLocationDropdown: true,
  isSticky: false,
  searchButton: (
    <Button icon="search" isPositionedRight isRounded>
      Search
    </Button>
  ),
};
/* eslint react/no-unused-prop-types: 0 */
Component.propTypes = {
  /**
   * A function called for each day to be displayed in the DateRangePicker. Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {Boolean}     - Is the day blocked.
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
};
