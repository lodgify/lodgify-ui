import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { IconCard } from 'elements/IconCard';

import { transportOptions } from '../mock-data/props';

import { getTransportOptionsMarkup } from './getTransportOptionsMarkup';

const getLabelGroup = () =>
  shallow(getTransportOptionsMarkup(transportOptions));

describe('getTransportOptionsMarkup', () => {
  it('should return a Semantic UI `Label.Group`', () => {
    const wrapper = getLabelGroup();

    expectComponentToBe(wrapper, 'div.ui.labels');
  });

  describe('the `Label.Group`', () => {
    it('should render the right children', () => {
      const wrapper = getLabelGroup();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, IconCard)
      );
    });
  });

  describe('each `IconCard` in the second `Grid` component', () => {
    const getIconCard = () =>
      getLabelGroup()
        .find(IconCard)
        .first();

    it('should have the right props', () => {
      const wrapper = getIconCard();

      expectComponentToHaveProps(wrapper, {
        isFilled: true,
        label: expect.any(String),
        name: transportOptions[0].iconName,
      });
    });
  });
});
