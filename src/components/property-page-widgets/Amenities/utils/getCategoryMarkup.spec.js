import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

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

const getMarkup = isUserOnMobile =>
  shallow(getCategoryMarkup(category, 'yo', isUserOnMobile));

describe('getCategoryMarkup', () => {
  it('should return `GridColumn` component', () => {
    const wrapper = getMarkup();

    expectComponentToBe(wrapper, 'GridColumn');
  });

  it('should have the right props', () => {
    const wrapper = getMarkup();

    expectComponentToHaveProps(wrapper, { width: 4 });
  });

  it('should render the right children', () => {
    const wrapper = getMarkup();

    expectComponentToHaveChildren(wrapper, Icon, Paragraph);
  });

  describe('the `Icon`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup().find(Icon);

      expectComponentToHaveProps(wrapper, {
        isLabelLeft: true,
        labelText: category.name,
        labelWeight: 'heavy',
        name: category.iconName,
      });
    });
  });

  describe('the `Paragraph`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup().find(Paragraph);

      expectComponentToHaveChildren(
        wrapper,
        ...getFormattedAmenityItems(category.items)
      );
    });
  });

  describe('if `isFullWidth === true`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup(true);

      expectComponentToHaveProps(wrapper, { width: 12 });
    });
  });
});
