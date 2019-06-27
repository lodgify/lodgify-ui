import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component } from './component';

const getToggleInputSegment = props =>
  mount(<Component heading="👤" {...props} />);

describe('Component', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getToggleInputSegment();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.description` is passed', () => {
    it('should render the right structure', () => {
      const actual = getToggleInputSegment({ description: '🐷' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('handleOnClick', () => {
    it('should called `setState` with the correct arguments', () => {
      const wrapper = getToggleInputSegment();

      wrapper.instance().setState = jest.fn();
      wrapper.instance().handleOnClick();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        isToggleChecked: !wrapper.instance().state.isToggleChecked,
      });
    });

    describe('if `this.props.isToggleChecked` === true', () => {
      it('should called `setState` with the correct arguments', () => {
        const wrapper = getToggleInputSegment({ isToggleChecked: true });

        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleOnClick();

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          isToggleChecked: wrapper.instance().props.isToggleChecked,
        });
      });
    });

    it('should call `props.onClick` with the correct arguments', () => {
      const wrapper = getToggleInputSegment({
        onClick: jest.fn(),
        isToggleChecked: true,
      });

      wrapper.instance().handleOnClick();

      expect(wrapper.instance().props.onClick).toHaveBeenCalledWith(
        undefined,
        wrapper.instance().state.isToggleChecked
      );
    });
  });

  it('should have the correct `displayName`', () => {
    expectComponentToHaveDisplayName(Component, 'ToggleInputSegment');
  });
});
