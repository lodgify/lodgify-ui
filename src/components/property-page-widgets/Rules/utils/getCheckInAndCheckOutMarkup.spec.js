import { getCheckInAndCheckOutMarkup } from './getCheckInAndCheckOutMarkup';

const checkInLabel = 'The Label';
const checkInValue = '9:00 AM';
const checkOutLabel = 'The Label';
const checkOutValue = '9:00 AM';

describe('`getCheckInAndCheckOutMarkup`', () => {
  describe('if all check in and check out values are truthy', () => {
    it('should render the right structure', () => {
      const actual = getCheckInAndCheckOutMarkup(
        checkInLabel,
        checkInValue,
        checkOutLabel,
        checkOutValue
      );

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if any check in value is false or undefined', () => {
    it('should render the right structure', () => {
      const actual = getCheckInAndCheckOutMarkup(
        checkInLabel,
        '',
        checkOutLabel,
        checkOutValue
      );

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if any check out value is false or undefined', () => {
    it('should render the right structure', () => {
      const actual = getCheckInAndCheckOutMarkup(
        checkInLabel,
        checkInValue,
        undefined,
        checkOutValue
      );

      expect(actual).toMatchSnapshot();
    });
  });
  describe('if any check in or check out value is false or undefined', () => {
    it('should return false', () => {
      const actual = getCheckInAndCheckOutMarkup(
        checkInLabel,
        '',
        checkOutLabel,
        undefined
      );

      expect(actual).toMatchSnapshot();
    });
  });
});
