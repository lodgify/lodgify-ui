import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from 'semantic-ui-react';

import {
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from 'utils/expect-helpers';

import { Component as GridRow } from './component';

const getGridRow = props => shallow(<GridRow {...props} />);

describe('<GridRow />', () => {
  it('should render a single Semantic UI `Grid.Column` component', () => {
    const wrapper = getGridRow();
    expectComponentToBe(wrapper, Grid.Row);
  });

  describe('the Semantic UI `Grid` component', () => {
    it('should get the right props', () => {
      const wrapper = getGridRow();
      expectComponentToHaveProps(wrapper, {
        textAlign: expect.any(String),
      });
    });
  });

  it('should have displayName `GridRow`', () => {
    expectComponentToHaveDisplayName(GridRow, 'GridRow');
  });
});
