import React from 'react';
import { shallow } from 'enzyme';

import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';

import { Component as OwnerLogin } from './component';

describe('<OwnerLogin />', () => {
  it('should render a single Lodgify UI `Form` component', () => {
    const ownerLogin = shallow(<OwnerLogin />);
    const actual = ownerLogin.find(Form);
    expect(actual).toHaveLength(1);
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const form = shallow(<OwnerLogin />).find(Form);
      const actual = form.props();
      expect(actual).toEqual(
        expect.objectContaining({
          actionLink: expect.objectContaining({
            onClick: Function.prototype,
            text: 'Forgot password?',
          }),
          headingText: 'Owner Login',
          onSubmit: Function.prototype,
          submitButtonText: 'Log in',
        })
      );
    });

    it('should render three Lodgify UI `TextInput` components', () => {
      const form = shallow(<OwnerLogin />).find(Form);
      const actual = form.find(TextInput);
      expect(actual).toHaveLength(2);
    });
  });

  describe('the `TextInput` components', () => {
    it('should have the right props', () => {
      const form = shallow(<OwnerLogin />).find(Form);
      const textInputs = form.find(TextInput);
      const propSets = [
        { label: 'Email', name: 'email' },
        { label: 'Password', name: 'password', type: 'password' },
      ];
      textInputs.forEach((textInput, index) => {
        const actual = textInput.props();
        expect(actual).toEqual(expect.objectContaining(propSets[index]));
      });
    });
  });
});
