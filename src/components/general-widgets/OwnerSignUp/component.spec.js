import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import {
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  OWNER_SIGNUP,
  SIGN_UP,
} from 'utils/default-strings';
import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';
import { VerticalGutters } from 'layout/VerticalGutters';

import { getArrayOfLengthOfItem } from '../../../utils/get-array-of-length-of-item';

import { Component as OwnerSignUp } from './component';

const getOwnerSignUp = () => shallow(<OwnerSignUp />);

describe('<OwnerSignUp />', () => {
  it('should have `VerticalGutters` component as a wrapper', () => {
    const wrapper = getOwnerSignUp();

    expectComponentToBe(wrapper, VerticalGutters);
  });
  describe('the `VerticalGutters` component', () => {
    it('should have `Form` as its only children', () => {
      const wrapper = getOwnerSignUp();

      expectComponentToHaveChildren(wrapper, Form);
    });
  });

  describe('the `Form` component', () => {
    it('should have the right props', () => {
      const wrapper = getOwnerSignUp().find(Form);

      expectComponentToHaveProps(wrapper, {
        headingText: OWNER_SIGNUP,
        onSubmit: Function.prototype,
        submitButtonText: SIGN_UP,
        validation: expect.any(Object),
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
        { label: FIRST_NAME, name: 'firstName' },
        { label: LAST_NAME, name: 'lastName' },
        { label: EMAIL, name: 'email' },
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
