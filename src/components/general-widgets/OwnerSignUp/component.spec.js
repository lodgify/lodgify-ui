import React from 'react';
import { shallow } from 'enzyme';

import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';

import { Component as OwnerSignUp } from './component';

describe('<OwnerSignUp />', () => {
  it('should render a single Lodgify UI `Form` component', () => {
    const ownerSignUp = shallow(<OwnerSignUp />);
    const actual = ownerSignUp.find(Form);
    expect(actual).toHaveLength(1);
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const form = shallow(<OwnerSignUp />).find(Form);
      const actual = form.props();
      expect(actual).toEqual(
        expect.objectContaining({
          headingText: 'Owner Signup',
          onSubmit: Function.prototype,
          submitButtonText: 'Sign up',
        })
      );
    });

    it('should render three Lodgify UI `TextInput` components', () => {
      const form = shallow(<OwnerSignUp />).find(Form);
      const actual = form.find(TextInput);
      expect(actual).toHaveLength(3);
    });
  });

  describe('the `TextInput` components', () => {
    it('should have the right props', () => {
      const form = shallow(<OwnerSignUp />).find(Form);
      const textInputs = form.find(TextInput);
      const propSets = [
        { label: 'First Name', name: 'firstName' },
        { label: 'Last Name', name: 'lastName' },
        { label: 'Email', name: 'email' },
      ];
      textInputs.forEach((textInput, index) => {
        const actual = textInput.props();
        expect(actual).toEqual(expect.objectContaining(propSets[index]));
      });
    });
  });
});
