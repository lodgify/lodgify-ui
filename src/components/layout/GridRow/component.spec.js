import React from 'react';
import { shallow } from 'enzyme';
import { default as SemanticGridRow } from 'semantic-ui-react/dist/commonjs/collections/Grid/GridRow';
import {
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as GridRow } from './component';

const getGridRow = props => shallow(<GridRow {...props} />);

describe('<GridRow />', () => {
  it('should render a single Semantic UI `GridRow` component', () => {
    const wrapper = getGridRow();

    expectComponentToBe(wrapper, SemanticGridRow);
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
