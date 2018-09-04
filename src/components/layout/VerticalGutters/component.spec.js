import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToHaveChildren,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Divider } from 'elements/Divider';

import { VerticalGutters } from './index';

const children = 'This town is the oldest friend of mine';

const getVerticalGutters = () =>
  shallow(<VerticalGutters children={children} />);

describe('<VerticalGutters />', () => {
  it('should render the right children', () => {
    const wrapper = getVerticalGutters();

    expectComponentToHaveChildren(wrapper, Divider, children, Divider);
  });

  describe('the first `Divider` component', () => {
    it('should have the right props', () => {
      const wrapper = getVerticalGutters()
        .children()
        .first();

      expectComponentToHaveProps(wrapper, {
        size: 'large',
        hasLine: false,
      });
    });
  });

  describe('the second `Divider` component', () => {
    it('should have the right props', () => {
      const wrapper = getVerticalGutters()
        .children()
        .at(2);

      expectComponentToHaveProps(wrapper, {
        size: 'large',
        hasLine: false,
      });
    });
  });

  it('should have `displayName` `VerticalGutters`', () => {
    expectComponentToHaveDisplayName(VerticalGutters, 'VerticalGutters');
  });
});
