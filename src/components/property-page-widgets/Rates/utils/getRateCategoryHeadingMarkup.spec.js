import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

import { getRateCategoryHeadingMarkup } from './getRateCategoryHeadingMarkup';
import { getCostPerExtraGuestString } from './getCostPerExtraGuestString';

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
      const wrapper = getRateHeading();

      expectComponentToHaveChildren(wrapper, Paragraph, Paragraph);
    });
  });

  describe('the first `Paragraph`', () => {
    const getFirstParagraph = () =>
      getRateHeading()
        .find(Paragraph)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstParagraph();

      expectComponentToHaveProps(wrapper, { weight: 'heavy' });
    });

    it('should render the right children', () => {
      const wrapper = getFirstParagraph();

      expectComponentToHaveChildren(wrapper, rate.name);
    });
  });

  describe('the second `Paragraph`', () => {
    const getSecondParagraph = () =>
      getRateHeading()
        .find(Paragraph)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondParagraph();

      expectComponentToHaveProps(wrapper, { weight: 'light' });
    });

    it('should render the right children', () => {
      const { dateRange, numberOfGuests, costPerExtraGuest } = rate;
      const wrapper = getSecondParagraph();

      expectComponentToHaveChildren(
        wrapper,
        dateRange,
        'br',
        Icon,
        numberOfGuests,
        'br',
        getCostPerExtraGuestString(costPerExtraGuest)
      );
    });
  });

  describe('the `Icon` component', () => {
    it('should have the right props', () => {
      const wrapper = getRateHeading().find(Icon);

      expectComponentToHaveProps(wrapper, { name: 'guests' });
    });
  });
});
