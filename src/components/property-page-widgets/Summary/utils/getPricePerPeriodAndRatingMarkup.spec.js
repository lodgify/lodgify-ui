import React from 'react';
import { mount } from 'enzyme';

import { getPricePerPeriodAndRatingMarkup } from './getPricePerPeriodAndRatingMarkup';

const pricePerPeriod = '280$';
const periodText = 'wooble';

const getMarkupAsRenderedComponent = (ratingNumber, isShowingPlaceholder) =>
  mount(
    <div>
      {getPricePerPeriodAndRatingMarkup(
        isShowingPlaceholder,
        periodText,
        pricePerPeriod,
        ratingNumber
      )}
    </div>
  );

describe('getPricePerPeriodAndRatingMarkup', () => {
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
