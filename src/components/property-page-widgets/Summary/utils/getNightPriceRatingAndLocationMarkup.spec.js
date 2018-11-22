import React from 'react';
import { shallow } from 'enzyme';

import { getNightPriceRatingAndLocationMarkup } from './getNightPriceRatingAndLocationMarkup';

const nightPrice = '280$';
const locationName = 'someLocation';

const getMarkupAsRenderedComponent = ratingNumber =>
  shallow(
    <div>
      {getNightPriceRatingAndLocationMarkup(
        ratingNumber,
        nightPrice,
        locationName
      )}
    </div>
  );

describe('getNightPriceRatingAndLocationMarkup', () => {
  describe('if `ratingNumber` is not `0`', () => {
    it('should return the right markup', () => {
      const ratingNumber = 1;
      const wrapper = getMarkupAsRenderedComponent(ratingNumber);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `ratingNumber` is `0`', () => {
    it('should return the right markup', () => {
      const ratingNumber = 0;
      const wrapper = getMarkupAsRenderedComponent(ratingNumber);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
