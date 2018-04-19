import React from 'react';
import { shallow } from 'enzyme';
import { Button as SemanticButton } from 'semantic-ui-react';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from 'lib/expect-helpers';
import { Icon } from 'elements/Icon';

import { Component as Button } from './component';

const getButton = props => shallow(<Button {...props}>Press me</Button>);

describe('<Button />', () => {
  it('should render a single Semantic UI `Button` component', () => {
    const wrapper = getButton();
    const actual = wrapper.is(SemanticButton);
    expect(actual).toBe(true);
  });

  it('should pass the `Button` component the right props', () => {
    const wrapper = getButton();
    expectComponentToHaveProps(wrapper, {
      disabled: false,
      floated: 'left',
      loading: false,
      circular: false,
    });
  });

  it('should pass the `Button` component `props.isRounded` as `circular`', () => {
    const wrapper = getButton({ isRounded: true });
    expectComponentToHaveProps(wrapper, {
      circular: true,
    });
  });

  describe('if `props.isPositionedRight` is true', () => {
    it('should pass the `Button` component `floated="right"`', () => {
      const wrapper = getButton({ isPositionedRight: true });
      expectComponentToHaveProps(wrapper, {
        floated: 'right',
      });
    });
  });

  describe('if `props.isSecondary` is true', () => {
    it('should pass the `Button` component `secondary={true}`', () => {
      const wrapper = getButton({ isSecondary: true });
      expectComponentToHaveProps(wrapper, {
        secondary: true,
      });
    });
  });

  describe('if `props.size` is informed', () => {
    it('should pass the `Button` component `size={size}`', () => {
      const wrapper = getButton({ size: 'massive' });
      expectComponentToHaveProps(wrapper, {
        size: 'massive',
      });
    });
  });

  it('should render the right children', () => {
    const wrapper = getButton();
    expectComponentToHaveChildren(wrapper, 'Press me');
  });

  describe('if `props.icon` is informed', () => {
    const getButtonWithIcon = () => getButton({ icon: 'world' });

    it('should render an <Icon />', () => {
      const wrapper = getButtonWithIcon();
      expectComponentToHaveChildren(wrapper, Icon, 'Press me');
    });

    describe('the <Icon>', () => {
      it('should have the right props', () => {
        const wrapper = getButtonWithIcon().find(Icon);
        expectComponentToHaveProps(wrapper, {
          name: 'world',
        });
      });
    });
  });

  describe('if `props.hasShadow` is informed', () => {
    it('should have the `has-shadow` className', () => {
      const wrapper = getButton({ hasShadow: true });
      expectComponentToHaveProps(wrapper, {
        className: 'has-shadow',
      });
    });
  });

  it('should have displayName `Button`', () => {
    const actual = Button.displayName;
    expect(actual).toBe('Button');
  });
});
