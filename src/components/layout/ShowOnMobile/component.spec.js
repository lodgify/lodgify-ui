import React from 'react';
import { shallow } from 'enzyme';
import { Responsive } from 'semantic-ui-react';

import {
  expectComponentToHaveProps,
  expectComponentToBe,
} from 'lib/expect-helpers';

import { Component as ShowOnMobile } from './component';

const props = {
  parent: '<section />',
  parentProps: { width: '🚸' },
  children: '<div />',
};

const getShowOnMobile = () => shallow(<ShowOnMobile {...props} />);

describe('<ShowOnMobile />', () => {
  it('should render a single Semantic UI `Responsive` component', () => {
    const wrapper = getShowOnMobile();
    expectComponentToBe(wrapper, Responsive);
  });

  describe('the `Responsive` component', () => {
    it('it should get the right props', () => {
      const wrapper = getShowOnMobile();

      expectComponentToHaveProps(wrapper, {
        as: props.parent,
        children: props.children,
      });
    });
  });

  it('should have `displayName` `ShowOnMobile`', () => {
    const actual = ShowOnMobile.displayName;
    expect(actual).toBe('ShowOnMobile');
  });
});
