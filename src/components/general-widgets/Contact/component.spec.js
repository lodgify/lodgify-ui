import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { CaptchaInput } from 'inputs/CaptchaInput';

import { roomOptions, propertyOptions } from './mock-data/options';
import { Component as Contact } from './component';

const captchaInputImage = 'someImage';

const getContact = extraProps =>
  mount(<Contact captchaInputImage={captchaInputImage} {...extraProps} />);

describe('<Contact />', () => {
  it('should have the correct structure', () => {
    const wrapper = getContact();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.propertyOptions` is passed', () => {
    it('should have the correct structure', () => {
      const wrapper = getContact({ propertyOptions });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.roomOptions` is passed', () => {
    it('should have the correct structure', () => {
      const wrapper = getContact({ roomOptions });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `propertyOptions` and `roomOptions` are passed', () => {
    it('should have the correct structure', () => {
      const wrapper = getContact({ propertyOptions, roomOptions });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('the `CaptchaInput`', () => {
    it('should have the right props', () => {
      const wrapper = getContact().find(CaptchaInput);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.successMessage` is passed', () => {
    it('should render the success message above the submit button', () => {
      const wrapper = getContact({
        successMessage: 'This is a successful message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.errorMessage` is passed', () => {
    it('should render the error message above the submit button', () => {
      const wrapper = getContact({
        errorMessage: 'This is an error message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `Contact`', () => {
    expectComponentToHaveDisplayName(Contact, 'Contact');
  });
});
