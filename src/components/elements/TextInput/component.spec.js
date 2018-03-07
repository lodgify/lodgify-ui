import React from 'react';
import { shallow } from 'enzyme';

import { Component as TextInput } from './component';

describe('<TextInput />', () => {
  it('should render a single `InputController` component', () => {
    const textInput = shallow(<TextInput />);
    const actual = textInput.find('InputController').length;
    expect(actual).toBe(1);
  });

  it('should pass the right `props` to `InputController`', () => {
    const inputController = shallow(<TextInput />).find('InputController');
    const actual = inputController.props();
    expect(actual).toEqual(
      expect.objectContaining({
        tagName: 'input',
        ...TextInput.defaultProps,
      })
    );
  });

  it('should have displayName `TextInput`', () => {
    const actual = TextInput.displayName;
    expect(actual).toBe('TextInput');
  });
});
