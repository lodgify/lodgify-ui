import React from 'react';
import moment from 'moment';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

const buildWeekDayMappingMarkup = () => (
  <ul className="DayPicker_weekHeader_ul">
    {moment.weekdays(true).map((weekday, index) => (
      <li
        className="DayPicker_weekHeader_li"
        key={buildKeyFromStrings(weekday, index)}
      >
        <small>
          {moment()
            .day(weekday)
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
