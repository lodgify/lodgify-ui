import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FeaturedProperty } from './component';

const props = {
  bedroomsNumber: 3,
  guestsNumber: 3,
  imageUrl: '🐱🐱',
  locationName: 'Catania',
  nightPrice: '$280',
  propertyName: 'The Cat House',
  propertyType: 'Bed and breakfast',
  propertyUrl: '/',
  ratingNumber: 4.8,
};

const getFeaturedProperty = () => shallow(<FeaturedProperty {...props} />);

describe('<FeaturedProperty />', () => {
  it('should render the right structure', () => {
    const actual = getFeaturedProperty();

    expect(actual).toMatchSnapshot();
  });

  it('should have `displayName` `FeaturedProperty`', () => {
    expectComponentToHaveDisplayName(FeaturedProperty, 'FeaturedProperty');
  });
});
