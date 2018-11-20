import { mount } from 'enzyme';

import { getNightPriceAndRatingMarkup } from './getNightPriceAndRatingMarkup';

const props = {
  ratingNumber: 90,
  nightPrice: '280$',
};

const getMarkupAsRenderedComponent = (ratingNumber = props.ratingNumber) =>
  mount(getNightPriceAndRatingMarkup(ratingNumber, props.nightPrice));

describe('getNightPriceAndRatingMarkup', () => {
  it('should return the right children', () => {
    const wrapper = getMarkupAsRenderedComponent();

    expect(wrapper).toMatchSnapshot();
  });

  describe('the `ratingNumber`', () => {
    it('should not render the `Rating` if the `ratingNumber` is 0', () => {
      const wrapper = getMarkupAsRenderedComponent(0);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
