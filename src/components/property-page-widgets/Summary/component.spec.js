import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Summary } from './component';

const props = {
  locationName: 'Catania',
  nightPrice: '$280',
  propertyName: 'The Cat House',
  ratingNumber: 4.8,
};

const getSummary = extraProps => mount(<Summary {...props} {...extraProps} />);

describe('<Summary/>', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getSummary();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.areOnlyNightPriceAndRatingDisplayed` is true', () => {
    it('should render the right children', () => {
      const actual = getSummary({ areOnlyNightPriceAndRatingDisplayed: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` Summary', () => {
    expectComponentToHaveDisplayName(Summary, 'Summary');
  });
});
