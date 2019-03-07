import React from 'react';
import { mount } from 'enzyme';

import { getNightPriceAndRatingMarkup } from './getNightPriceAndRatingMarkup';

const nightPrice = '280$';

const getMarkupAsRenderedComponent = (ratingNumber, isShowingPlaceholder) =>
  mount(
    <div>
      {getNightPriceAndRatingMarkup(
        ratingNumber,
        nightPrice,
        isShowingPlaceholder
      )}
    </div>
  );

describe('getNightPriceAndRatingMarkup', () => {
  describe('if `isShowingPlaceholder` === true', () => {
    it('should return the correct structure', () => {
      const actual = getMarkupAsRenderedComponent(undefined, true);

      expect(actual).toMatchSnapshot();
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
