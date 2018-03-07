import React from 'react';
import { shallow } from 'enzyme';

import { Component as TextArea } from './component';

describe('<TextArea />', () => {
  it('should render a single `InputController` component', () => {
    const textInput = shallow(<TextArea />);
    const actual = textInput.find('InputController').length;
    expect(actual).toBe(1);
  });

  it('should pass the right `props` to `InputController`', () => {
    const inputController = shallow(<TextArea />).find('InputController');
    const actual = inputController.props();
    expect(actual).toEqual(
      expect.objectContaining({
        tagName: 'textarea',
        ...TextArea.defaultProps,
      })
    );
  });

  it('should have displayName `TextArea`', () => {
    const actual = TextArea.displayName;
    expect(actual).toBe('TextArea');
  });
});
