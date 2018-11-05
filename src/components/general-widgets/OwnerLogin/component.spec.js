import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as OwnerLogin } from './component';

const getOwnerLogin = extraProps => mount(<OwnerLogin {...extraProps} />);

describe('<OwnerLogin />', () => {
  it('should render the correct structure', () => {
    const wrapper = getOwnerLogin();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.successMessage` is passed', () => {
    it('should render the success message above the submit button', () => {
      const wrapper = getOwnerLogin({
        successMessage: 'This is a successful message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.errorMessage` is passed', () => {
    it('should render the error message above the submit button', () => {
      const wrapper = getOwnerLogin({
        errorMessage: 'This is an error message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `OwnerLogin`', () => {
    expectComponentToHaveDisplayName(OwnerLogin, 'OwnerLogin');
  });
});
