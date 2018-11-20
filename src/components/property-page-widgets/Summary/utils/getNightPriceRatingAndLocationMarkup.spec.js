import { mount } from 'enzyme';

import { getNightPriceRatingAndLocationMarkup } from './getNightPriceRatingAndLocationMarkup';

const props = {
  ratingNumber: 90,
  nightPrice: '280$',
  locationName: 'someLocation',
};

const getMarkupAsRenderedComponent = (ratingNumber = props.ratingNumber) =>
  mount(
    getNightPriceRatingAndLocationMarkup(
      ratingNumber,
      props.nightPrice,
      props.locationName
    )
  );

describe('getNightPriceRatingAndLocationMarkup', () => {
  it('should return the right structure', () => {
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
