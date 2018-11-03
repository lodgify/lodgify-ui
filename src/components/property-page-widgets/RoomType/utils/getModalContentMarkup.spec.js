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

const extraFeatures = [{ labelText: '1 Dining-Room' }];
const features = [{ iconName: 'double bed', labelText: '1 Bedroom' }];
const name = 'yoyo name';
const nightPrice = '$1010';
const slideShowImages = [
  {
    alternativeText: 'Two cats',
    url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Two cats',
  },
  {
    alternativeText: 'Two more cats',
    url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    title: 'Two more cats',
  },
];

const getMarkup = ({ description = 'yoyo description', ratingNumber = 3.2 }) =>
  mount(
    getModalContentMarkup(
      amenities,
      description,
      extraFeatures,
      features,
      name,
      nightPrice,
      ratingNumber,
      slideShowImages
    )
  );

describe('getModalContentMarkup', () => {
  it('should return the correct structure', () => {
    const wrapper = getMarkup({});

    expect(wrapper).toMatchSnapshot();
  });

  describe('`props.ratingNumber` if null', () => {
    it('should not render the rating', () => {
      const wrapper = getMarkup({
        ratingNumber: null,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('`props.description` if null', () => {
    it('should not render the description', () => {
      const wrapper = getMarkup({
        description: null,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
