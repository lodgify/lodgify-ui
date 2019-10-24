import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Button } from 'elements/Button';

import { Component as Counter } from './component';

const getShallowCounter = props => shallow(<Counter {...props} />);

describe('Counter', () => {
  describe('render', () => {
    it('should render the right structure', () => {
      const wrapper = mount(<Counter />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Minus button', () => {
    describe('Interaction: onClick', () => {
      it('should call onChange with the correct arguments', () => {
        const onChange = jest.fn();
        const wrapper = getShallowCounter({
          name: 'lol',
          value: 1,
          min: 0,
          onChange,
        });
        const minusButton = wrapper.find(Button).at(0);

        minusButton.simulate('click');

        expect(onChange).toHaveBeenCalledWith('lol', 0);
      });
    });
  });

  describe('Addition button', () => {
    describe('Interaction: onClick', () => {
      it('should call onChange with the correct arguments', () => {
        const onChange = jest.fn();
        const wrapper = getShallowCounter({
          name: 'lol',
          value: 1,
          min: 0,
          onChange,
        });
        const minusButton = wrapper.find(Button).at(1);

        minusButton.simulate('click');
        expect(onChange).toHaveBeenCalledWith('lol', 2);
      });
    });
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(Counter, 'Counter');
  });
});
