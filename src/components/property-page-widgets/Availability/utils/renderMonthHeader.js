import React from 'react';
import moment from 'moment';

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
 * @param   {string} localeCode
 * @return  {Function}
 */
// eslint-disable-next-line react/prop-types
export const renderMonthHeader = localeCode => ({ month }) => {
  month.locale(localeCode);

  return (
    <div className="CalendarMonth_caption">
      <strong>{month.format('MMMM YYYY')}</strong>
      <div className="DayPicker_weekHeaders">
        <div className="DayPicker_weekHeader">
          {buildWeekDayMappingMarkup()}
        </div>
      </div>
    </div>
  );
};
