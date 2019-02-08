import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FeaturedRoomTypes } from './component';

const featuredRoomTypes = [
  {
    bedsNumber: 3,
    guestsNumber: 3,
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    nightPrice: '$280',
    ratingNumber: 4.8,
    roomTypeName: 'The Cat House',
    roomTypeUrl: '/',
  },
  {
    bedsNumber: 3,
    guestsNumber: 3,
    imageUrl:
      'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    nightPrice: '$280',
    ratingNumber: 4.8,
    roomTypeName: 'The Cat House',
    roomTypeUrl: '/',
  },
];

const getFeaturedRoomTypes = props => mount(<FeaturedRoomTypes {...props} />);

describe('<FeaturedRoomTypes />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getFeaturedRoomTypes({ featuredRoomTypes });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.headingText` is passed', () => {
    it('should render the right structure', () => {
      const headingText = 'My god I love Elton John';
      const actual = getFeaturedRoomTypes({ featuredRoomTypes, headingText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.featuredRoomTypes` length === 0 and `props.isShowingPlaceholder` === true', () => {
    it('should render the right structure', () => {
      const actual = getFeaturedRoomTypes({ isShowingPlaceholder: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `FeaturedRoomTypes`', () => {
    expectComponentToHaveDisplayName(FeaturedRoomTypes, 'FeaturedRoomTypes');
  });
});
