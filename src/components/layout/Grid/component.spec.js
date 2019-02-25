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
        centered: false,
        stackable: false,
      });
    });
  });

  it('should have displayName `Grid`', () => {
    expectComponentToHaveDisplayName(LodgifyGrid, 'Grid');
  });
});
