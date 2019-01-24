import { shallow } from 'enzyme';

import { getRateCategoryHeadingMarkup } from './getRateCategoryHeadingMarkup';

const costPerExtraGuestLabel = 'laaaabel';

const getRateHeading = rateCategory =>
  shallow(getRateCategoryHeadingMarkup(rateCategory, costPerExtraGuestLabel));

describe('getRateCategoryHeadingMarkup', () => {
  describe('if all values are defined', () => {
    it('should return the right markup', () => {
      const actual = getRateHeading({
        name: 'Mid Season',
        dateRange: '01/05/2018 - 01/08/2018',
        numberOfGuests: '2',
        costPerExtraGuest: '5€',
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `rateCategory.numberOfGuests` is `null` or `undefined`', () => {
    it('should return the right markup', () => {
      const testCases = [
        {
          name: 'Mid Season',
          dateRange: '01/05/2018 - 01/08/2018',
          numberOfGuests: null,
          costPerExtraGuest: '5€',
        },
        {
          name: 'High Season',
          dateRange: '01/08/2018 - 01/10/2018',
          costPerExtraGuest: '50€',
        },
      ];

      testCases.forEach(testCase => {
        const actual = getRateHeading(testCase);

        expect(actual).toMatchSnapshot();
      });
    });
  });

  describe('if `rateCategory.costPerExtraGuest` is `null` or `undefined`', () => {
    it('should return the right markup', () => {
      const testCases = [
        {
          name: 'Mid Season',
          dateRange: '01/05/2018 - 01/08/2018',
          numberOfGuests: '5',
          costPerExtraGuest: null,
        },
        {
          name: 'High Season',
          dateRange: '01/08/2018 - 01/10/2018',
          numberOfGuests: '19',
        },
      ];

      testCases.forEach(testCase => {
        const actual = getRateHeading(testCase);

        expect(actual).toMatchSnapshot();
      });
    });
  });
});
