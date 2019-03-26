import { mount } from 'enzyme';

import { getModalContentMarkup } from './getModalContentMarkup';

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
const extraFeatures = [{ labelText: '1 Dining-Room' }];
const features = [{ iconName: 'double bed', labelText: '1 Bedroom' }];
const name = 'yoyo name';
const periodText = 'ich, burp...';
const pricePerPeriod = '$1010';
const slideShowImage = [
  {
    alternativeText: 'Two cats',
    url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Two cats',
  },
];

const getMarkup = ({
  description = 'yoyo description',
  ratingNumber = 3.2,
  slideShowImages = slideShowImage,
}) =>
  mount(
    getModalContentMarkup(
      amenities,
      amenitiesHeadingText,
      description,
      extraFeatures,
      features,
      name,
      periodText,
      pricePerPeriod,
      ratingNumber,
      slideShowImages
    )
  );

describe('getModalContentMarkup', () => {
  it('should return the correct structure', () => {
    const wrapper = getMarkup({});

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.ratingNumber` === null', () => {
    it('should not render the rating', () => {
      const wrapper = getMarkup({
        ratingNumber: null,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.description` === null', () => {
    it('should not render the description', () => {
      const wrapper = getMarkup({
        description: null,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.slideShowImages.length` > 1', () => {
    it('should render the right structure', () => {
      const wrapper = getMarkup({
        slideShowImages: [
          ...slideShowImage,
          {
            alternativeText: 'Two cats',
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
