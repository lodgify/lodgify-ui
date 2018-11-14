import moment from 'moment';

import { isDayBlockedOrBeforeCurrentDate } from './isDayBlockedOrBeforeCurrentDate';

describe('`isDayBlockedOrBeforeCurrentDate`', () => {
  describe('if day is not passed', () => {
    it('should return the right value', () => {
      const day = undefined;
      const actual = isDayBlockedOrBeforeCurrentDate(day);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if day is blocked', () => {
    it('should return the right value', () => {
      const day = '2018-01-01';
      const getIsDayBlocked = () => true;
      const actual = isDayBlockedOrBeforeCurrentDate(day, getIsDayBlocked);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if day is not blocked', () => {
    const getIsDayBlocked = () => false;

    it('should return the right value when date is in the past', () => {
      const day = '2018-01-01';
      const actual = isDayBlockedOrBeforeCurrentDate(day, getIsDayBlocked);

      expect(actual).toMatchSnapshot();
    });

    it('should return the right value when date is in the future', () => {
      const day = moment();
      const actual = isDayBlockedOrBeforeCurrentDate(day, getIsDayBlocked);

      expect(actual).toMatchSnapshot();
    });
  });
});
