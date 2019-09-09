import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component } from './component';

const heading = '👤';

const getToggleInputSegment = props =>
  mount(<Component heading={heading} {...props} />);

const getShallowToggleInputSegment = props =>
  shallow(<Component heading={heading} {...props} />);

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

  describe('componentDidUpdate', () => {
    describe('if a controlled `isToggleChecked` value has changed', () => {
      it('should call `setState` and `props.onChange` with the right arguments', () => {
        const name = 'some name';
        const isToggleChecked = true;
        const onChange = jest.fn();
        const setState = jest.fn();
        const props = {
          name,
          onChange,
          isToggleChecked,
        };
        const wrapper = getShallowToggleInputSegment(props);

        wrapper.instance().setState = setState;
        wrapper.instance().componentDidUpdate({ isToggleChecked: false }, {});

        expect(setState).toHaveBeenCalledWith({
          isToggleChecked: props.isToggleChecked,
        });
        expect(onChange).toHaveBeenCalledWith(name, isToggleChecked);
      });
    });

    describe('if a uncontrolled `isToggleChecked` value has changed', () => {
      it('should call `onChange` with the right arguments', () => {
        const name = 'some name';
        const onChange = jest.fn();
        const props = {
          name,
          onChange,
        };
        const wrapper = getShallowToggleInputSegment(props);

        wrapper
          .instance()
          .componentDidUpdate(
            { isToggleChecked: false },
            { isToggleChecked: true }
          );

        expect(onChange).toHaveBeenCalledWith(
          name,
          wrapper.instance().state.isToggleChecked
        );
      });
    });

    describe('if neither `this.props.isToggleChecked` or `this.state.isToggleChecked` have changed', () => {
      it('should not call `props.onChange` or `setState`', () => {
        const onChange = jest.fn();
        const setState = jest.fn();

        const wrapper = getShallowToggleInputSegment({
          onChange,
        });

        wrapper.instance().setState = setState;
        wrapper
          .instance()
          .componentDidUpdate(
            { isToggleChecked: false },
            { isToggleChecked: false }
          );

        expect(onChange).not.toHaveBeenCalled();
        expect(setState).not.toHaveBeenCalled();
      });
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
      const event = {
        '🎇': '🎆',
      };

      const wrapper = getToggleInputSegment({
        onClick: jest.fn(),
        isToggleChecked: true,
      });

      wrapper.instance().handleOnClick(event);

      expect(wrapper.instance().props.onClick).toHaveBeenCalledWith(event);
    });
  });

  it('should have the correct `displayName`', () => {
    expectComponentToHaveDisplayName(Component, 'ToggleInputSegment');
  });
});
