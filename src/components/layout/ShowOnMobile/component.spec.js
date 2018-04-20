import React from 'react';
import { shallow } from 'enzyme';
import { Responsive } from 'semantic-ui-react';

import { expectComponentToHaveProps } from 'lib/expect-helpers';

import { Component as ShowOnMobile } from './component';

const props = {
  parent: '🚸',
};

const getShowOnMobile = () => shallow(<ShowOnMobile {...props} />);

describe('<ShowOnMobile />', () => {
  it('should render a single Semantic UI `Responsive` component', () => {
    const wrapper = getShowOnMobile();
    const actual = wrapper.is(Responsive);
    expect(actual).toBe(true);
  });

  describe('the `Responsive` component', () => {
    it('it should render the right props', () => {
      const wrapper = getShowOnMobile()
        .find(Responsive)
        .first();

      expectComponentToHaveProps(wrapper, {
        as: props.parent,
        maxWidth: 599,
      });
    });
  });

  it('should have `displayName` `ShowOnMobile`', () => {
    const actual = ShowOnMobile.displayName;
    expect(actual).toBe('ShowOnMobile');
  });
});
