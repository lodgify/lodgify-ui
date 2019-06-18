import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Range } from './component';
import { DEFAULT_VALUE } from './constants';

const getShallowRange = props => shallow(<Range {...props} />);

describe('Range', () => {
  describe('state', () => {
    it('should have the right initial state', () => {
      const wrapper = getShallowRange();
      const actual = wrapper.state();

      expect(actual).toEqual({
        activeHandleID: null,
        value: DEFAULT_VALUE,
      });
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `value` has not changed', () => {
      it('should not call `props.onChange`', () => {
        const onChange = jest.fn();
        const wrapper = getShallowRange({ onChange });

        wrapper.instance().componentDidUpdate({}, { value: DEFAULT_VALUE });

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `value` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const name = 'some name';
        const onChange = jest.fn();
        const wrapper = getShallowRange({ name, onChange });

        wrapper.instance().componentDidUpdate({}, { value: [1] });

        expect(onChange).toHaveBeenCalledWith(name, DEFAULT_VALUE);
      });
    });
  });

  describe('handleChange', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getShallowRange();
      const value = [0, 1, 2];

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().handleChange(value);

      expect(wrapper.instance().setState).toHaveBeenCalledWith({ value });
    });
  });

  describe('handleSlideEnd', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getShallowRange();

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().handleSlideEnd();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        activeHandleID: null,
      });
    });
  });

  describe('handleSlideStart', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getShallowRange();
      const activeHandleID = 'some id';

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().handleSlideStart(undefined, { activeHandleID });

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        activeHandleID,
      });
    });
  });

  describe('render', () => {
    it('should render the right structure', () => {
      const wrapper = mount(<Range initialValue={[0, 1]} />);

      wrapper.setState({ activeHandleID: '$$-0' });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(Range, 'Range');
  });
});
