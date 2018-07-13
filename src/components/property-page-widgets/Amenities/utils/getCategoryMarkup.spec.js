import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { GridColumn } from 'layout/GridColumn';
import { Icon } from 'elements/Icon';

import { getFormattedAmenityItems } from './getFormattedAmenityItems';
import { getCategoryMarkup } from './getCategoryMarkup';

const category = {
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
};

const getMarkup = () => shallow(getCategoryMarkup(category, 'yo'));

describe('getCategoryMarkup', () => {
  it('should return `GridRow` component', () => {
    const wrapper = getMarkup();
    expectComponentToBe(wrapper, 'GridRow');
  });

  it('should render the right children', () => {
    const wrapper = getMarkup();
    expectComponentToHaveChildren(
      wrapper,
      ...getArrayOfLengthOfItem(2, GridColumn)
    );
  });

  describe('the first `GridColumn`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup()
        .find(GridColumn)
        .at(0);
      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('each of the `Icon`s child of the `GridColumn`s', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup()
        .find(Icon)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        isLabelLeft: true,
        label: category.name,
        labelWeight: 'heavy',
        name: category.iconName,
      });
    });
  });

  describe('second `GridColumn`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup()
        .find(GridColumn)
        .at(1);
      expectComponentToHaveChildren(
        wrapper,
        ...getFormattedAmenityItems(category.items)
      );
    });
  });
});
