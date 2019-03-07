import React from 'react';
import { shallow } from 'enzyme';

import { getNightPriceRatingAndLocationMarkup } from './getNightPriceRatingAndLocationMarkup';

const nightPrice = '280$';
const locationName = 'someLocation';

const getMarkupAsRenderedComponent = (ratingNumber, isShowingPlaceholder) =>
  shallow(
    <div>
      {getNightPriceRatingAndLocationMarkup(
        ratingNumber,
        nightPrice,
        locationName,
        isShowingPlaceholder
      )}
    </div>
  );

describe('getNightPriceRatingAndLocationMarkup', () => {
  describe('if `isShowingPlaceholder` === true', () => {
    it('should return the right structure', () => {
      const wrapper = getMarkupAsRenderedComponent(undefined, true);

      expect(wrapper).toMatchSnapshot();
    });
  });

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
