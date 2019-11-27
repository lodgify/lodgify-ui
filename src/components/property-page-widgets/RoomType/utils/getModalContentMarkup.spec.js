jest.mock('react-image-gallery', () => {
  const { Component } = require('react');

  class ImageGallery extends Component {
    render() {
      return <div />;
    }
  }

  return ImageGallery;
});

jest.mock('is-html');

import isValidHTML from 'is-html';
import React from 'react';
import { mount } from 'enzyme';

import { getModalContentMarkup } from './getModalContentMarkup';

isValidHTML.mockReturnValue(true);

const amenities = [
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
];

const amenitiesHeadingText = 'bibip-bop';
const amenitiesConjunctionText = 'WALL-E';
const extraFeatures = [{ labelText: '1 Dining-Room' }];
const features = [{ iconName: 'double bed', labelText: '1 Bedroom' }];
const name = 'yoyo name';
const periodText = 'ich, burp...';
const pricePerPeriodPrefix = 'morf';
const pricePerPeriod = '$1010';
const slideShowImage = [
  {
    url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Two cats',
  },
];

const getMarkup = ({
  description = 'yoyo description',
  ratingNumber = 3.2,
  images = slideShowImage,
  amenities = amenities,
}) =>
  mount(
    getModalContentMarkup(
      amenities,
      amenitiesConjunctionText,
      amenitiesHeadingText,
      description,
      extraFeatures,
      features,
      name,
      periodText,
      pricePerPeriod,
      pricePerPeriodPrefix,
      ratingNumber,
      images
    )
  );

describe('getModalContentMarkup', () => {
  it('should return the correct structure', () => {
    const wrapper = getMarkup({ amenities });

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.ratingNumber` === null', () => {
    it('should not render the rating', () => {
      const wrapper = getMarkup({
        ratingNumber: null,
        amenities,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.description` === null', () => {
    it('should not render the description', () => {
      const wrapper = getMarkup({
        description: null,
        amenities,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.amenities` size is zero', () => {
    it('should not render the `Amenities` component', () => {
      const wrapper = getMarkup({
        amenities: [],
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.images.length` > 1', () => {
    it('should render the right structure', () => {
      const wrapper = getMarkup({
        amenities,
        images: [
          ...slideShowImage,
          {
            url:
              'https://si5.cdbcdn.com/oh/c2d7df79-2d68-4fdf-a3ab-f6af3da46a77.jpg',
            title: 'Two cats',
          },
        ],
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
