import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FeaturedRoomType } from './component';

const props = {
  bedsLabel: '🛏',
  bedsNumber: 3,
  guestsLabel: '🙆‍♂️',
  guestsNumber: 3,
  imageAlternativeText: 'this alt tag',
  imageUrl: '🐱🐱',
  locationName: 'Catania',
  nightPrice: '$280',
  roomTypeName: 'The Cat House',
  roomTypeUrl: '/',
};

const getFeaturedRoomType = () => shallow(<FeaturedRoomType {...props} />);

describe('<FeaturedRoomType />', () => {
  it('should render the right structure', () => {
    const actual = getFeaturedRoomType();

    expect(actual).toMatchSnapshot();
  });

  it('should have `displayName` `FeaturedRoomType`', () => {
    expectComponentToHaveDisplayName(FeaturedRoomType, 'FeaturedRoomType');
  });
});
