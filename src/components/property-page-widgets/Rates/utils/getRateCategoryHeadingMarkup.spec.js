import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';

import { getRateCategoryHeadingMarkup } from './getRateCategoryHeadingMarkup';
import { buildPricePerExtraGuestString } from './buildPricePerExtraGuestString';

const rate = {
  name: 'Mid Season',
  dateRange: '01/05/2018 - 01/08/2018',
  numberOfGuests: '2',
  costPerExtraGuest: '5€',
};

const getRateHeading = () => shallow(getRateCategoryHeadingMarkup(rate));

describe('getRateCategoryHeadingMarkup', () => {
  it('should render a single `div` element', () => {
    const wrapper = getRateHeading();
    expectComponentToBe(wrapper, 'div');
  });

  describe('the single `div` element', () => {
    it('should render the right children', () => {
      const { dateRange, numberOfGuests, costPerExtraGuest } = rate;
      const wrapper = getRateHeading();
      expectComponentToHaveChildren(
        wrapper,
        'strong',
        'br',
        dateRange,
        'br',
        Icon,
        numberOfGuests,
        'br',
        buildPricePerExtraGuestString(costPerExtraGuest)
      );
    });
  });

  describe('the `strong` element', () => {
    it('should render the right children', () => {
      const wrapper = getRateHeading().find('strong');
      expectComponentToHaveChildren(wrapper, rate.name);
    });
  });

  describe('the `Icon` component', () => {
    it('should have the right props', () => {
      const wrapper = getRateHeading().find(Icon);
      expectComponentToHaveProps(wrapper, { name: 'users' });
    });
  });
});
