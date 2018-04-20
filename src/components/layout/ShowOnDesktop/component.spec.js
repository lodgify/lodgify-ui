import React from 'react';
import { shallow } from 'enzyme';
import { Responsive } from 'semantic-ui-react';

import { expectComponentToHaveProps } from 'lib/expect-helpers';

import { Component as ShowOnDesktop } from './component';

const props = {
  parent: '🚸',
};

const getShowOnDesktop = () => shallow(<ShowOnDesktop {...props} />);

describe('<ShowOnDesktop />', () => {
  it('should render a single Semantic UI `Responsive` component', () => {
    const wrapper = getShowOnDesktop();
    const actual = wrapper.is(Responsive);
    expect(actual).toBe(true);
  });

  describe('the `Responsive` component', () => {
    it('it should render the right props', () => {
      const wrapper = getShowOnDesktop()
        .find(Responsive)
        .first();

      expectComponentToHaveProps(wrapper, {
        as: props.parent,
        minWidth: 600,
      });
    });
  });

  it('should have `displayName` `ShowOnDesktop`', () => {
    const actual = ShowOnDesktop.displayName;
    expect(actual).toBe('ShowOnDesktop');
  });
});
