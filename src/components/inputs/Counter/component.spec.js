import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Counter } from './component';

const getShallowCounter = props => shallow(<Counter {...props} />);

describe('Counter', () => {
  describe('state', () => {
    it('should have the right initial state', () => {
      const wrapper = getShallowCounter();
      const actual = wrapper.state();

      expect(actual).toEqual({
        value: 0,
      });
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `value` has not changed', () => {
      it('should not call `props.onChange`', () => {
        const onChange = jest.fn();
        const wrapper = getShallowCounter({ onChange });

        wrapper.instance().componentDidUpdate({}, { value: 0 });

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `value` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const name = 'some name';
        const onChange = jest.fn();
        const wrapper = getShallowCounter({ name, onChange });

        wrapper.instance().componentDidUpdate({}, { value: 1 });

        expect(onChange).toHaveBeenCalledWith(name, 0);
      });
    });
  });

  describe('handleDecrement', () => {
    describe('if `value` is `0`', () => {
      it('should not call `setState`', () => {
        const wrapper = getShallowCounter();
        const value = 0;

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().handleDecrement(value);

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });

    describe('if `value` is not `0`', () => {
      it('should call `setState` with the right arguments', () => {
        const testCases = [1, 2, 100];

        testCases.forEach(value => {
          const wrapper = getShallowCounter({ initialValue: value });

          wrapper.instance().setState = jest.fn();
          wrapper.update();
          wrapper.instance().handleDecrement();

          expect(wrapper.instance().setState).toHaveBeenCalledWith({
            value: value - 1,
          });
        });
      });
    });
  });

  describe('handleIncrement', () => {
    describe('if `value` is `this.props.max`', () => {
      it('should not call `setState`', () => {
        const max = 3;
        const wrapper = getShallowCounter({ max, initialValue: max });

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().handleIncrement();

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });

    describe('if `value` is not `this.props.max`', () => {
      it('should call `setState` with the right arguments', () => {
        const testCases = [
          {
            max: 2,
            value: 1,
          },
          {
            max: 10,
            value: 2,
          },
          {
            max: 1000,
            value: 100,
          },
        ];

        testCases.forEach(({ max, value }) => {
          const wrapper = getShallowCounter({ max, initialValue: value });

          wrapper.instance().setState = jest.fn();
          wrapper.update();
          wrapper.instance().handleIncrement();

          expect(wrapper.instance().setState).toHaveBeenCalledWith({
            value: value + 1,
          });
        });
      });
    });
  });

  describe('render', () => {
    it('should render the right structure', () => {
      const wrapper = mount(<Counter />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(Counter, 'Counter');
  });
});
