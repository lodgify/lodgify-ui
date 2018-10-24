import React from 'react';
import { shallow } from 'enzyme';
import { default as SemanticGridColumn } from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';
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

    expectComponentToBe(wrapper, SemanticGridColumn);
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
