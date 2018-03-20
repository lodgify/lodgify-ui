import React from 'react';
import { shallow } from 'enzyme';
import { Flag } from 'semantic-ui-react';

import { Component as PhoneInput } from './component';

const getPhoneInput = props => shallow(<PhoneInput {...props} />);

const getInputController = () => getPhoneInput().find('InputController');

describe('<PhoneInput />', () => {
  it('should render a single `InputController` component', () => {
    const wrapper = getPhoneInput();
    const actual = wrapper.find('InputController').length;
    expect(actual).toBe(1);
  });

  it('should pass the right `props` to `InputController`', () => {
    const inputController = getInputController();
    const actual = inputController.props();
    expect(actual).toEqual(
      expect.objectContaining({
        error: false,
        icon: <Flag name="ad" />,
        isValid: false,
        label: '',
        name: '',
        onChange: expect.any(Function),
      })
    );
  });

  it('should pass an html `input` as a child to `InputController`', () => {
    const inputController = getInputController();
    const actual = inputController.children('input');
    expect(actual).toHaveLength(1);
  });

  describe('the child `input`', () => {
    it('should get the right props', () => {
      const inputController = getInputController();
      const actual = inputController.children('input').props();
      expect(actual).toEqual(
        expect.objectContaining({
          type: 'text',
        })
      );
    });
  });

  it('should have displayName `PhoneInput`', () => {
    const actual = PhoneInput.displayName;
    expect(actual).toBe('PhoneInput');
  });
});
