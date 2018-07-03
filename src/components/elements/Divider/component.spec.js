import React from 'react';
import { shallow } from 'enzyme';
import { Divider as SemanticDivider } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Divider } from './component';

const getDivider = props => shallow(<Divider {...props} />);

describe('<Divider />', () => {
  it('should render a single Semantic UI `Divider` component', () => {
    const wrapper = getDivider();
    expectComponentToBe(wrapper, SemanticDivider);
  });

  describe('the Semantic UI `Divider` component', () => {
    it('should get the right props', () => {
      const wrapper = getDivider();
      expectComponentToHaveProps(wrapper, { hidden: true });
    });

    it('should get `props.hidden` as false if the parent `props.hasLine` is true', () => {
      const wrapper = getDivider({ hasLine: true });
      expectComponentToHaveProps(wrapper, { hidden: false });
    });
  });

  it('should have `displayName` Divider', () => {
    expectComponentToHaveDisplayName(Divider, 'Divider');
  });
});
