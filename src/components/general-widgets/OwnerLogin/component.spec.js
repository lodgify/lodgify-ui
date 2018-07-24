import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';

import { Component as OwnerLogin } from './component';
import { getForgotPasswordFormMarkup } from './utils/getForgotPasswordFormMarkup';

const getOwnerLogin = () => shallow(<OwnerLogin />);

describe('<OwnerLogin />', () => {
  it('should render a single Lodgify UI `Form` component', () => {
    const wrapper = getOwnerLogin();

    expectComponentToBe(wrapper, Form);
  });

  describe('the `Form` component', () => {
    it('should have the right children', () => {
      const wrapper = getOwnerLogin().find(Form);

      expectComponentToHaveChildren(wrapper, TextInput, TextInput);
    });

    it('should have the right props', () => {
      const wrapper = getOwnerLogin().find(Form);

      expectComponentToHaveProps(wrapper, {
        actionLink: {
          text: getForgotPasswordFormMarkup(Function.prototype),
        },
        headingText: 'Owner Login',
        onSubmit: Function.prototype,
        submitButtonText: 'Log in',
      });
    });
  });

  describe('the first `TextInput` component', () => {
    it('should have the right props', () => {
      const wrapper = getOwnerLogin()
        .find(TextInput)
        .at(0);

      expectComponentToHaveProps(wrapper, { label: 'Email', name: 'email' });
    });
  });

  describe('the second `TextInput` component', () => {
    it('should have the right props', () => {
      const wrapper = getOwnerLogin()
        .find(TextInput)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        label: 'Password',
        name: 'password',
        type: 'password',
      });
    });
  });

  it('should have `displayName` `OwnerLogin`', () => {
    expectComponentToHaveDisplayName(OwnerLogin, 'OwnerLogin');
  });
});
