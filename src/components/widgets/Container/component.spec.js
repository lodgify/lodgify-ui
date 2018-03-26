import React from 'react';
import { shallow } from 'enzyme';

import { GridColumn } from 'collections/Grid/GridColumn';
import { OwnerLogin } from 'widgets/OwnerLogin';

import { Component as Container } from './component';

describe('<Container />', () => {
  it('should render a single Lodgify UI `Container` component', () => {
    const container = shallow(<Container />);
    expect(container.exists()).toBe(true);
  });

  describe('the `Container` component', () => {
    it('should not render children none provided', () => {
      const column = shallow(<Container />).find(GridColumn);
      expect(column.children().exists()).toBeFalsy();
    });

    it('should render a GridColumn', () => {
      const column = shallow(<Container />).find(GridColumn);
      expect(column).toHaveLength(1);
    });

    it('should render children if informed', () => {
      const column = shallow(
        <Container>
          <OwnerLogin />
        </Container>
      ).find(GridColumn);
      expect(column.children().exists()).toBeTruthy();
    });

    it('should render `Widget` children', () => {
      const column = shallow(
        <Container>
          <OwnerLogin />
        </Container>
      ).find(GridColumn);
      const widget = column.find(OwnerLogin);
      expect(column.children().exists()).toBeTruthy();
      expect(widget.exists()).toBeTruthy();
    });
  });
});
