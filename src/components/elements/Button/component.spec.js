import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Button } from './component';

const getButton = props => mount(<Button {...props}>Press me</Button>);

describe('<Button />', () => {
  it('should render a the right structure', () => {
    const wrapper = getButton();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.isRounded` is true', () => {
    it('should render the right structure', () => {
      const wrapper = getButton({ isRounded: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.isFormSubmit` is true', () => {
    it('should render the right structure', () => {
      const wrapper = getButton({ isFormSubmit: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.isPositionedRight` is true', () => {
    it('should render the right structure', () => {
      const wrapper = getButton({ isPositionedRight: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.isSecondary` is true', () => {
    it('should render the right structure', () => {
      const wrapper = getButton({ isSecondary: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.isCompact` is true', () => {
    it('should render the right structure', () => {
      const wrapper = getButton({ isCompact: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.size` is informed', () => {
    it('should pass the `Button` component `size={size}`', () => {
      const wrapper = getButton({ size: 'massive' });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.icon` is informed', () => {
    it('should render the right structure', () => {
      const wrapper = getButton({ icon: 'search' });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.hasShadow` is informed', () => {
    it('should render the right structure', () => {
      const wrapper = getButton({ hasShadow: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.hasOutline` is informed', () => {
    it('should render the right structure', () => {
      const wrapper = getButton({ isOutlined: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have displayName `Button`', () => {
    expectComponentToHaveDisplayName(Button, 'Button');
  });
});
