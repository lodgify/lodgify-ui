import React from 'react';
import { shallow } from 'enzyme';

import {
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from 'lib/expect-helpers';

import { Component as StaticSticky } from './component';

const getStaticSticky = props => shallow(<StaticSticky {...props} />);

describe('<StaticSticky />', () => {
  it('should render a two `div` components', () => {
    const actual = getStaticSticky().find('div');
    expect(actual).toHaveLength(2);
  });

  describe('the first `div` component', () => {
    const wrapper = getStaticSticky()
      .find('div')
      .at(0);

    it('should have the right props', () => {
      expectComponentToHaveProps(wrapper, {
        style: {
          position: 'relative',
          display: 'inline-block',
          height: '100%',
          width: '100%',
        },
      });
    });
  });

  describe('the second `div` component', () => {
    const wrapper = getStaticSticky()
      .find('div')
      .at(1);

    it('should have the right props', () => {
      expectComponentToHaveProps(wrapper, {
        style: {
          position: expect.any(String),
          bottom: expect.anything(),
          top: expect.anything(),
          left: 0,
          width: '100%',
          zIndex: 100,
          padding: '0 2em',
        },
      });
    });
  });

  it('should have displayName `StaticSticky`', () => {
    expectComponentToHaveDisplayName(StaticSticky, 'StaticSticky');
  });
});
