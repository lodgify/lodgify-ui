import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from 'semantic-ui-react';
import {
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as LodgifyGrid } from './component';

const getGrid = props => shallow(<LodgifyGrid {...props} />);

describe('<Grid />', () => {
  it('should render a single Semantic UI `Grid` component', () => {
    const wrapper = getGrid();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the `Grid` component', () => {
    it('should get the right props', () => {
      const wrapper = getGrid();

      expectComponentToHaveProps(wrapper, {
        centered: expect.any(Boolean),
      });
    });
  });

  describe('if `props.hasFixedWidth` is passed', () => {
    it('should set `className` to `has-fixed-width`', () => {
      const wrapper = getGrid({
        hasFixedWidth: true,
      });

      expectComponentToHaveProps(wrapper, {
        className: 'has-fixed-width',
      });
    });
  });

  it('should have displayName `Grid`', () => {
    expectComponentToHaveDisplayName(LodgifyGrid, 'Grid');
  });
});
