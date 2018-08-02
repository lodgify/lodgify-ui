import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';

import { getArrayOfLengthOfItem } from '../../../utils/get-array-of-length-of-item';

import { Component as OwnerSignUp } from './component';

const getOwnerSignUp = () => shallow(<OwnerSignUp />);

describe('<OwnerSignUp />', () => {
  it('should render a single Lodgify UI `Form` component', () => {
    const wrapper = getOwnerSignUp();

    expectComponentToBe(wrapper, Form);
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const wrapper = getOwnerSignUp().find(Form);

      expectComponentToHaveProps(wrapper, {
        headingText: 'Owner Signup',
        onSubmit: Function.prototype,
        submitButtonText: 'Sign up',
      });
    });

    it('should render three Lodgify UI `TextInput` components', () => {
      const wrapper = getOwnerSignUp().find(Form);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(3, TextInput)
      );
    });
  });

  describe('the `TextInput` components', () => {
    it('should have the right props', () => {
      const wrappers = getOwnerSignUp()
        .find(Form)
        .find(TextInput);
      const propSets = [
        { label: 'First Name', name: 'firstName' },
        { label: 'Last Name', name: 'lastName' },
        { label: 'Email', name: 'email' },
      ];

      wrappers.forEach((wrapper, index) => {
        expectComponentToHaveProps(wrapper, propSets[index]);
      });
    });
  });

  it('should have displayName `OwnerSignUp`', () => {
    expectComponentToHaveDisplayName(OwnerSignUp, 'OwnerSignUp');
  });
});
