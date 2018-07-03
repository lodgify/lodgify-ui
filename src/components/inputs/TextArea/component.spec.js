import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { InputController } from '../InputController';

import { Component as TextArea } from './component';

const getTextArea = () => shallow(<TextArea />);

describe('<TextArea />', () => {
  it('should render a single `InputController` component', () => {
    const wrapper = getTextArea();
    expectComponentToBe(wrapper, InputController);
  });

  it('should pass the right `props` to `InputController`', () => {
    const wrapper = getTextArea().find('InputController');
    expectComponentToHaveProps(wrapper, {
      error: false,
      isValid: false,
      label: '',
      name: '',
      onChange: Function.prototype,
    });
  });

  it('should pass a `textarea` as a child to `InputController`', () => {
    const wrapper = getTextArea().find('InputController');
    expectComponentToHaveChildren(wrapper, 'textarea');
  });

  describe('the child `textarea`', () => {
    it('should have the right props', () => {
      const wrapper = getTextArea().find('textarea');
      expectComponentToHaveProps(wrapper, { rows: '8' });
    });
  });

  it('should have displayName `TextArea`', () => {
    expectComponentToHaveDisplayName(TextArea, 'TextArea');
  });
});
