import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from 'semantic-ui-react';
import {
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as GridColumn } from './component';

const getGridColumn = props => shallow(<GridColumn {...props} />);

describe('<GridColumn />', () => {
  it('should render a single Semantic UI `Grid.Column` component', () => {
    const wrapper = getGridColumn();

    expectComponentToBe(wrapper, Grid.Column);
  });

  describe('the Semantic UI `Grid` component', () => {
    it('should get the right props', () => {
      const wrapper = getGridColumn();

      expectComponentToHaveProps(wrapper, {
        verticalAlign: expect.any(String),
        width: null,
      });
    });
  });

  it('should have displayName `GridColumn`', () => {
    expectComponentToHaveDisplayName(GridColumn, 'GridColumn');
  });
});
