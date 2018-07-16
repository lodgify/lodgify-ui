import React from 'react';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';

import { WEEKDAY_LENGTH } from '../constants';

const buildWeekDayMappingMarkup = () => (
  <ul className="DayPicker_weekHeader_ul">
    {Array(WEEKDAY_LENGTH)
      .fill()
      .map((_, index) => (
        <li className="DayPicker_weekHeader_li" key={index}>
          <small>
            {moment()
              .day(index)
              .format('dd')}
          </small>
        </li>
      ))}
  </ul>
);

/**
 * @param  {Object} header
 * @param  {Moment} header.month
 * @return {Object}
 */
export const renderMonthHeader = ({ month }) => (
  <div className="CalendarMonth_caption">
    <strong>{month.format('MMMM YYYY')}</strong>
    <div className="DayPicker_weekHeaders">
      <div className="DayPicker_weekHeader">{buildWeekDayMappingMarkup()}</div>
    </div>
  </div>
);

renderMonthHeader.propTypes = {
  month: momentPropTypes.momentObj.isRequired,
};
