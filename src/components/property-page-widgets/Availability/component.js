import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CalendarMonth, CalendarDay } from 'react-dates';
import { BLOCKED_MODIFIER } from 'react-dates/constants';
import moment from 'moment';
import { Card } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Paragraph } from 'typography/Paragraph';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { withResponsive } from 'utils/with-responsive';
import { Icon } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';

import { getMonthsToDisplay } from './utils/getMonthsToDisplay';
import { getNextStartDate } from './utils/getNextStartDate';
import { getPreviousStartDate } from './utils/getPreviousStartDate';
import { BLOCKED_DAY_CLASS } from './constants';

import 'react-dates/initialize';

/**
 * The standard widget for displaying the availability of a room.
 * @extends {React.PureComponent}
 */
class Component extends PureComponent {
  state = {
    startDate: moment(),
  };

  handleClickNextMonth = () =>
    this.setState({
      startDate: getNextStartDate(
        this.state.startDate,
        this.props.isUserOnMobile
      ),
    });

  handleClickPreviousMonth = () =>
    this.setState({
      startDate: getPreviousStartDate(
        this.state.startDate,
        this.props.isUserOnMobile
      ),
    });

  renderCalendarDay = props => {
    const modifiers = new Set([]);
    const { getIsDayBlocked } = this.props;

    if (props.day && getIsDayBlocked(props.day)) {
      modifiers.add(BLOCKED_DAY_CLASS);
      modifiers.add(BLOCKED_MODIFIER);
    }

    return <CalendarDay {...props} modifiers={modifiers} />;
  };

  reloadCalendarOnRoomSelection = (evt, value) => {
    this.props.onChangeRoomDropdown(evt, value);
    this.forceUpdate();
  };

  render() {
    const { startDate } = this.state;
    const { isUserOnMobile, roomOptionsWithImages } = this.props;

    return (
      <div>
        <Heading size="small">Availability</Heading>
        <Grid>
          <GridRow>
            <GridColumn
              computer={7}
              mobile={12}
              tablet={6}
              verticalAlignContent="middle"
            >
              <Grid>
                <GridColumn
                  computer={5}
                  mobile={5}
                  tablet={12}
                  verticalAlignContent="middle"
                >
                  <Paragraph size="tiny" weight="heavy">
                    View Availability For:
                  </Paragraph>
                </GridColumn>
                <GridColumn computer={7} mobile={7} tablet={12}>
                  <Dropdown
                    icon="map pin"
                    label="Properties"
                    onChange={this.reloadCalendarOnRoomSelection}
                    options={roomOptionsWithImages}
                  />
                </GridColumn>
              </Grid>
            </GridColumn>
            <GridColumn
              only="tablet computer"
              textAlign="right"
              verticalAlignContent="middle"
              width={5}
            >
              <Icon
                color="light grey"
                isLabelLeft
                label="Unavailable"
                name="square"
              />
            </GridColumn>
          </GridRow>
        </Grid>
        <Card fluid>
          <Grid padded>
            <GridRow>
              {getMonthsToDisplay(startDate, isUserOnMobile).map(
                (month, index) => (
                  <GridColumn
                    computer={6}
                    key={buildKeyFromStrings('month-column', index)}
                    mobile={12}
                    tablet={6}
                  >
                    <CalendarMonth
                      isVisible
                      month={month}
                      renderCalendarDay={this.renderCalendarDay}
                    />
                  </GridColumn>
                )
              )}
            </GridRow>
            <GridRow>
              <GridColumn width={6}>
                <Icon
                  label="Previous"
                  name="arrow left"
                  onClick={this.handleClickPreviousMonth}
                />
              </GridColumn>
              <GridColumn textAlign="right" width={6}>
                <Icon
                  isLabelLeft
                  label="Next"
                  name="arrow right"
                  onClick={this.handleClickNextMonth}
                />
              </GridColumn>
            </GridRow>
          </Grid>
        </Card>
        <Grid>
          <GridColumn only="mobile" textAlign="right">
            <GridColumn>
              <Icon
                color="grey"
                isLabelLeft
                label="Unavailable"
                name="square"
              />
            </GridColumn>
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export const ComponentWithResponsive = withResponsive(Component);

Component.displayName = 'Availability';

Component.defaultProps = {
  getIsDayBlocked: () => false,
  onChangeRoomDropdown: Function.prototype,
  roomOptionsWithImages: [],
};

Component.propTypes = {
  /**
   * A function that is passed to determine if the current date should be blocked, the function is passed a moment object
   * @param {Moment} momentObj
   * @returns {Boolean}
   */
  getIsDayBlocked: PropTypes.func,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /**
   * A function that triggered when a room is changed in the room dropdown
   * @param {Event} event
   * @param {String} currentRoomValue
   */
  onChangeRoomDropdown: PropTypes.func,
  /** The options which the user can select for the room field. */
  roomOptionsWithImages: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      /** The source url for the image to display with the option. */
      image: PropTypes.string,
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
};
