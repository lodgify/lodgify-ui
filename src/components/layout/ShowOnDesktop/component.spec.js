import React from 'react';
import { shallow } from 'enzyme';
import { Responsive } from 'semantic-ui-react';

import {
  expectComponentToHaveProps,
  expectComponentToBe,
} from 'lib/expect-helpers';

import { Component as ShowOnDesktop } from './component';

const props = {
  parent: '<section />',
  parentProps: { width: '🚸' },
  children: '<div />',
};

const getShowOnDesktop = () => shallow(<ShowOnDesktop {...props} />);

describe('<ShowOnDesktop />', () => {
  it('should render a single Semantic UI `Responsive` component', () => {
    const wrapper = getShowOnDesktop();
    expectComponentToBe(wrapper, Responsive);
  });

  describe('the `Responsive` component', () => {
    it('it should get the right props', () => {
      const wrapper = getShowOnDesktop();

      expectComponentToHaveProps(wrapper, {
        as: props.parent,
        children: props.children,
      });
    });
  });

  it('should have `displayName` `ShowOnDesktop`', () => {
    const actual = ShowOnDesktop.displayName;
    expect(actual).toBe('ShowOnDesktop');
  });
});
