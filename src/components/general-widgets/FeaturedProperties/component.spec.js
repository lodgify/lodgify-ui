import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FeaturedProperties } from './component';

const featuredProperties = [
  {
    bedroomsNumber: 3,
    guestsNumber: 3,
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    pricePerPeriod: '$280',
    propertyName: 'The Cat House',
    propertyType: 'Bed and breakfast',
    propertyUrl: '/',
    ratingNumber: 4.8,
  },
  {
    bedroomsNumber: 3,
    guestsNumber: 3,
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    pricePerPeriod: '$280',
    propertyName: 'The Cat House',
    propertyType: 'Bed and breakfast',
    propertyUrl: '/',
    ratingNumber: 4.8,
  },
];

const getFeaturedProperties = otherProps =>
  mount(
    <FeaturedProperties
      featuredProperties={featuredProperties}
      {...otherProps}
    />
  );

describe('<FeaturedProperties />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getFeaturedProperties();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.headingText` is passed', () => {
    it('should render the right structure', () => {
      const headingText = 'My god I love Cliff Richard';
      const actual = getFeaturedProperties({ headingText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isShowingPlaceholder` === true and `props.featuredProperties.length` === 0', () => {
    it('should render the right structure', () => {
      const actual = getFeaturedProperties({
        isShowingPlaceholder: true,
        featuredProperties: [],
      });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `FeaturedProperties`', () => {
    expectComponentToHaveDisplayName(FeaturedProperties, 'FeaturedProperties');
  });
});
