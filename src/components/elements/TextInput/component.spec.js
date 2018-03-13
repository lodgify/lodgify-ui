import React from 'react';
import { shallow } from 'enzyme';

import { Component as TextInput } from './component';

const getTextInput = () => shallow(<TextInput />);

describe('<TextInput />', () => {
  it('should render a single `InputController` component', () => {
    const textInput = getTextInput();
    const actual = textInput.find('InputController').length;
    expect(actual).toBe(1);
  });

  it('should pass the right `props` to `InputController`', () => {
    const inputController = getTextInput().find('InputController');
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

  it('should pass an `input` as a child to `InputController`', () => {
    const inputController = getTextInput().find('InputController');
    const actual = inputController.children('input');
    expect(actual).toHaveLength(1);
  });

  describe('the child `input`', () => {
    it('should get the `TextInput.props.type` as `props.type`', () => {
      const htmlInput = getTextInput().find('input');
      const actual = htmlInput.prop('type');
      expect(actual).toBe('text');
    });
  });

  it('should have displayName `TextInput`', () => {
    const actual = TextInput.displayName;
    expect(actual).toBe('TextInput');
  });
});
