import React from 'react';
import { shallow } from 'enzyme';
import { GridColumn } from 'semantic-ui-react';

import { OwnerLogin } from 'widgets/OwnerLogin';

import { Component as Container } from './component';

describe('<Container />', () => {
  it('should render a single Lodgify UI `Container` component', () => {
    const container = shallow(<Container />);
    expect(container.exists()).toBe(true);
  });

  describe('the `Container` component', () => {
    it('should not render children if not informed', () => {
      const column = shallow(<Container />).find(GridColumn);
      expect(column.children().exists()).toBeFalsy();
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
