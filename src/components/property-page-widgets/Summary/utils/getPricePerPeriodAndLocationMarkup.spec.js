import React from 'react';
import { shallow } from 'enzyme';

import { getPricePerPeriodAndLocationMarkup } from './getPricePerPeriodAndLocationMarkup';

const pricePerPeriod = '280$';
const locationName = 'someLocation';
const periodText = 'night';

const getMarkupAsRenderedComponent = (
  ratingNumber,
  isShowingPlaceholder,
  periodText
) =>
  shallow(
    <div>
      {getPricePerPeriodAndLocationMarkup(
        isShowingPlaceholder,
        locationName,
        periodText,
        pricePerPeriod,
        ratingNumber
      )}
    </div>
  );

describe('getPricePerPeriodAndLocationMarkup', () => {
  describe('if `isShowingPlaceholder` === true', () => {
    it('should return the right structure', () => {
      const wrapper = getMarkupAsRenderedComponent(undefined, true);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `ratingNumber` is not `0`', () => {
    it('should return the right markup', () => {
      const ratingNumber = 1;
      const wrapper = getMarkupAsRenderedComponent(ratingNumber, periodText);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `ratingNumber` is `0`', () => {
    it('should return the right markup', () => {
      const ratingNumber = 0;
      const wrapper = getMarkupAsRenderedComponent(ratingNumber, periodText);

      expect(wrapper).toMatchSnapshot();
    });
  });
});