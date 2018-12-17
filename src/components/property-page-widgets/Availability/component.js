import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CalendarMonth, CalendarDay } from 'react-dates';
import { BLOCKED_MODIFIER } from 'react-dates/constants';
import moment from 'moment';
import { Card } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Dropdown } from 'inputs/Dropdown';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';
import { withResponsive } from 'utils/with-responsive';
import {
  AVAILABILITY,
  NEXT,
  PREVIOUS,
  PROPERTIES,
  UNAVAILABLE,
  VIEW_AVAILABILITY_FOR,
} from 'utils/default-strings';

import { BLOCKED_DAY_CLASS } from './constants';
import { isDayBlockedOrBeforeCurrentDate } from './utils/isDayBlockedOrBeforeCurrentDate';
import { getMonthsToDisplay } from './utils/getMonthsToDisplay';
import { getNextStartDate } from './utils/getNextStartDate';
import { getPreviousStartDate } from './utils/getPreviousStartDate';
import { renderMonthHeader } from './utils/renderMonthHeader';

import 'react-dates/initialize';

/**
 * The standard widget for displaying the availability of a room.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
class Component extends PureComponent {
  state = {
    startDate: moment(),
  };

  componentDidMount = () => moment.locale(this.props.localeCode);

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

    if (isDayBlockedOrBeforeCurrentDate(props.day, getIsDayBlocked)) {
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
    const {
      headingText,
      isUserOnMobile,
      legendLabel,
      nextMonthsButtonLabel,
      previousMonthsButtonLabel,
      propertyDropdownLabel,
      propertyDropdownPlaceholderLabel,
      roomOptionsWithImages,
    } = this.props;

    return (
      <div>
        <Heading size="small">{headingText}</Heading>
        <Grid>
          <GridRow>
            {size(roomOptionsWithImages) > 0 && (
              <GridColumn
                computer={7}
                mobile={12}
                tablet={6}
                verticalAlignContent="middle"
              >
                <Grid>
                  <GridColumn
                    computer={3}
                    mobile={5}
                    tablet={12}
                    verticalAlignContent="middle"
                  >
                    <Paragraph size="tiny" weight="heavy">
                      {propertyDropdownLabel}
                    </Paragraph>
                  </GridColumn>
                  <GridColumn computer={7} mobile={7} tablet={12}>
                    <Dropdown
                      icon={ICON_NAMES.MAP_PIN}
                      label={propertyDropdownPlaceholderLabel}
                      onChange={this.reloadCalendarOnRoomSelection}
                      options={roomOptionsWithImages}
                    />
                  </GridColumn>
                </Grid>
              </GridColumn>
            )}
            <GridColumn
              floated="right"
              only="tablet computer"
              textAlign="right"
              verticalAlignContent="middle"
              width={5}
            >
              <Icon
                color="light grey"
                isLabelLeft
                labelText={legendLabel}
                name={ICON_NAMES.SQUARE}
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
                    className="availability-calendar-wrapper"
                    computer={6}
                    key={buildKeyFromStrings('month-column', index)}
                    mobile={12}
                    tablet={6}
                  >
                    <CalendarMonth
                      isVisible
                      month={month}
                      renderCalendarDay={this.renderCalendarDay}
                      renderMonthElement={renderMonthHeader}
                    />
                  </GridColumn>
                )
              )}
            </GridRow>
            <GridRow>
              <GridColumn width={6}>
                <Icon
                  labelText={previousMonthsButtonLabel}
                  name={ICON_NAMES.ARROW_LEFT}
                  onClick={this.handleClickPreviousMonth}
                />
              </GridColumn>
              <GridColumn textAlign="right" width={6}>
                <Icon
                  isLabelLeft
                  labelText={nextMonthsButtonLabel}
                  name={ICON_NAMES.ARROW_RIGHT}
                  onClick={this.handleClickNextMonth}
                />
              </GridColumn>
            </GridRow>
          </Grid>
        </Card>
        <Grid>
          <GridColumn only="mobile" textAlign="right" width={12}>
            <GridColumn>
              <Icon
                color="light grey"
                isLabelLeft
                labelText={legendLabel}
                name={ICON_NAMES.SQUARE}
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
  headingText: AVAILABILITY,
  legendLabel: UNAVAILABLE,
  localeCode: 'en',
  nextMonthsButtonLabel: NEXT,
  onChangeRoomDropdown: Function.prototype,
  previousMonthsButtonLabel: PREVIOUS,
  propertyDropdownLabel: VIEW_AVAILABILITY_FOR,
  propertyDropdownPlaceholderLabel: PROPERTIES,
  roomOptionsWithImages: [],
};

Component.propTypes = {
  /**
   * A function that is passed to determine if the current date should be blocked, the function is passed a moment object
   * @param {Moment} momentObj
   * @returns{boolean}
   */
  getIsDayBlocked: PropTypes.func,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The label for the legend. */
  legendLabel: PropTypes.string,
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year. */
  localeCode: PropTypes.string,
  /** The label for the next months button. */
  nextMonthsButtonLabel: PropTypes.string,
  /**
   * A function that triggered when a room is changed in the room dropdown
   * @param {Event} event
   * @param {String} currentRoomValue
   */
  onChangeRoomDropdown: PropTypes.func,
  /** The label for the previous months button. */
  previousMonthsButtonLabel: PropTypes.string,
  /** The label that goes next to the property dropdown. */
  propertyDropdownLabel: PropTypes.string,
  /** The label that goes inside the dropdown when there are no options. */
  propertyDropdownPlaceholderLabel: PropTypes.string,
  /** The options which the user can select for the room field. */
  roomOptionsWithImages: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      /** A list of one or more strings separated by commas indicating a set of source sizes for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      imageSizes: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      imageSrcSet: PropTypes.string,
      /** The source url of the image to display with the option. */
      imageUrl: PropTypes.string,
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
