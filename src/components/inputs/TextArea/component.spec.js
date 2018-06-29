import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
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
    const inputController = getTextArea().find('InputController');
    const actual = inputController.props();
    expect(actual).toEqual(
      expect.objectContaining({
        error: false,
        isValid: false,
        label: '',
        name: '',
        onChange: Function.prototype,
      })
    );
  });

  it('should pass a `textarea` as a child to `InputController`', () => {
    const inputController = getTextArea().find('InputController');
    const actual = inputController.children('textarea');
    expect(actual).toHaveLength(1);
  });

  describe('the child `textarea`', () => {
    it('should get `8` as `props.rows`', () => {
      const htmlInput = getTextArea().find('textarea');
      const actual = htmlInput.prop('rows');
      expect(actual).toBe('8');
    });
  });

  it('should have displayName `TextArea`', () => {
    expectComponentToHaveDisplayName(TextArea, 'TextArea');
  });
});
