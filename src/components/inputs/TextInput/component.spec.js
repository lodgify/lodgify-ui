import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { InputController } from '../InputController';

import { Component as TextInput } from './component';

const getTextInput = () => shallow(<TextInput />);

describe('<TextInput />', () => {
  it('should render a single `InputController` component', () => {
    const wrapper = getTextInput();

    expectComponentToBe(wrapper, InputController);
  });

  it('should pass the right `props` to `InputController`', () => {
    const wrapper = getTextInput().find('InputController');

    expectComponentToHaveProps(wrapper, {
      error: false,
      isValid: false,
      label: '',
      name: '',
      onChange: Function.prototype,
    });
  });

  it('should pass an `input` as a child to `InputController`', () => {
    const wrapper = getTextInput().find('InputController');

    expectComponentToHaveChildren(wrapper, 'input');
  });

  describe('the child `input`', () => {
    it('should get the `TextInput.props.type` as `props.type`', () => {
      const wrapper = getTextInput().find('input');

      expectComponentToHaveProps(wrapper, { type: 'text' });
    });
  });

  it('should have displayName `TextInput`', () => {
    expectComponentToHaveDisplayName(TextInput, 'TextInput');
  });
});
