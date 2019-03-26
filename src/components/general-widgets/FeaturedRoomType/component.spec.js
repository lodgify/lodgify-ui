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
  pricePerPeriod: '$280',
  roomTypeName: 'The Cat House',
  roomTypeUrl: '/',
};

const getFeaturedRoomType = extraProps =>
  shallow(<FeaturedRoomType {...props} {...extraProps} />);

describe('<FeaturedRoomType />', () => {
  it('should render the right structure', () => {
    const actual = getFeaturedRoomType();

    expect(actual).toMatchSnapshot();
  });

  it('should have `displayName` `FeaturedRoomType`', () => {
    expectComponentToHaveDisplayName(FeaturedRoomType, 'FeaturedRoomType');
  });

  describe('if `props.isShowingPlaceholder` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getFeaturedRoomType({ isShowingPlaceholder: true });

      expect(actual).toMatchSnapshot();
    });
  });
});
