jest.mock('react-image-gallery', () => {
  const { Component } = require('react');

  class ImageGallery extends Component {
    render() {
      return <div />;
    }
  }

  return ImageGallery;
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { ComponentWithResponsive as RoomType } from './component';

const props = {
  amenities: [
    {
      name: 'Cooking',
      iconName: 'leaf',
      items: ['Toaster', 'Microwave', 'Coffee Machine'],
    },
    {
      name: 'Bathroom & Laundry',
      iconName: 'paw',
      items: ['Bidet', 'Hair Dryer', 'Iron & Board'],
    },
  ],
  amenitiesHeadingText: 'Stiff Stoff Stuff',
  description: 'yayayay',
  locationName: 'Catania',
  pricePerPeriod: '$280',
  pricePerPeriodPrefix: 'morf',
  name: 'The Cat House',
  moreInfoText: 'Oof',
  propertyType: 'Bed and breakfast',
  propertyUrl: '/',
  ratingNumber: 4,
  images: [
    {
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Two cats',
    },
    {
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Two more cats',
    },
    {
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Much cats',
    },
  ],
  isUserOnMobile: false,
  extraFeatures: [{ labelText: '1 Dining-Room' }],
  features: [{ iconName: 'double bed', labelText: '1 Bedroom' }],
};

const getRoomType = extraProps =>
  shallow(<RoomType {...props} {...extraProps} />);

const getWrappedRoomType = extraProps => {
  const Child = getRoomType().prop('as');

  return mount(<Child {...props} {...extraProps} />);
};

describe('<RoomType />', () => {
  describe('by default', () => {
    it('should render the correct structure', () => {
      const actual = getWrappedRoomType();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isUserOnMobile === true`', () => {
    it('should render the correct structure', () => {
      const actual = getWrappedRoomType({ isUserOnMobile: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isShowingPlaceholder` is `true`', () => {
    it('should render the correct structure', () => {
      const actual = getWrappedRoomType({ isShowingPlaceholder: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the right `displayName`', () => {
    const component = getRoomType().prop('as');

    expectComponentToHaveDisplayName(component, 'RoomType');
  });
});
