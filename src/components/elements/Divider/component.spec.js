import React from 'react';
import { shallow } from 'enzyme';
import { Divider as SemanticDivider } from 'semantic-ui-react';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Divider } from './component';

const getDivider = props => shallow(<Divider {...props} />);

describe('<Divider />', () => {
  it('should render a single Semantic UI `Divider` component', () => {
    const wrapper = getDivider();
    const actual = wrapper.find(SemanticDivider).length;
    expect(actual).toBe(1);
  });

  describe('the Semantic UI `Divider` component', () => {
    it('should get the right props', () => {
      const wrapper = getDivider();
      const actual = wrapper.find('Divider').props();
      expect(actual).toEqual(
        expect.objectContaining({
          hidden: true,
        })
      );
    });

    it('should get `props.hidden` as false if the parent `props.hasLine` is true', () => {
      const wrapper = getDivider({ hasLine: true });
      const actual = wrapper.find('Divider').props();
      expect(actual).toEqual(
        expect.objectContaining({
          hidden: false,
        })
      );
    });
  });

  it('should have `displayName` Divider', () => {
    expectComponentToHaveDisplayName(Divider, 'Divider');
  });
});
