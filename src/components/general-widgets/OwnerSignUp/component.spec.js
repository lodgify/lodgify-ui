import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as OwnerSignUp } from './component';

const getOwnerSignUp = extraProps => mount(<OwnerSignUp {...extraProps} />);

describe('<OwnerSignUp />', () => {
  it('should render the correct structure', () => {
    const wrapper = getOwnerSignUp();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.successMessage` is passed', () => {
    it('should render the success message above the submit button', () => {
      const wrapper = getOwnerSignUp({
        successMessage: 'This is a successful message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.errorMessage` is passed', () => {
    it('should render the error message above the submit button', () => {
      const wrapper = getOwnerSignUp({
        errorMessage: 'This is an error message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `isBotProtected` === true', () => {
    it('should render the right structure', () => {
      const wrapper = getOwnerSignUp({
        isBotProtected: true,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `isPrivacyConsentRequired` is `truthy`', () => {
    it('should render the right structure', () => {
      const wrapper = getOwnerSignUp({
        isPrivacyConsentRequired: true,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have displayName `OwnerSignUp`', () => {
    expectComponentToHaveDisplayName(OwnerSignUp, 'OwnerSignUp');
  });
});
