import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from 'elements/Modal';
import { GridColumn } from 'layout/GridColumn';

import { getExtraItemsMarkup } from './getExtraItemsMarkup';

describe('getExtraItemsMarkup', () => {
  const modalTriggerText = 'test';
  const isStacked = true;
  const amenities = [
    {
      name: 'Cooking',
      iconName: 'coffee',
      items: ['Toaster', 'Microwave', 'Coffee Machine'],
    },
    {
      name: 'Bathroom',
      iconName: 'bathroom',
      items: ['Bidet', 'Hair Dryer'],
    },
    {
      name: 'Outside',
      iconName: 'sun',
      items: ['Tennis Court'],
    },
    {
      name: 'Spa & Gym',
      iconName: 'paw',
      items: ['Ping-Pong Table', 'Pool Table', 'Foosball'],
    },
    {
      name: 'Laundry',
      iconName: 'leaf',
      items: ['Washer', 'Dryer', 'Iron & Board'],
    },
    {
      name: 'Miscellaneous',
      iconName: 'coffee',
      items: [
        'Rice Steamer',
        'Hot Tub',
        'Fold-Away Bed',
        'Fireplace',
        'Steam Sauna',
        'Fitness-Room',
        'Parking',
        'Laundry Service',
      ],
    },
  ];

  const getMarkup = hasExtraItemsInModal =>
    shallow(
      <div>
        {getExtraItemsMarkup(
          hasExtraItemsInModal,
          modalTriggerText,
          amenities,
          isStacked
        )}
      </div>
    );

  describe('if `hasExtraItemsInModal` is true', () => {
    const hasExtraItemsInModal = true;

    it('should return the first five items of an array', () => {
      const wrapper = getMarkup(hasExtraItemsInModal);
      const actual = wrapper.find(Modal).find(GridColumn);

      expect(actual).toHaveLength(6);
    });
  });

  describe('if `hasExtraItemsInModal` is false', () => {
    const hasExtraItemsInModal = false;

    it('should return the first three items of an array', () => {
      const wrapper = getMarkup(hasExtraItemsInModal);
      const actual = wrapper.children(GridColumn);

      expect(actual).toHaveLength(6);
    });
  });
});
