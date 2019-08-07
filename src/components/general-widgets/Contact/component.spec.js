jest.mock('uniqid');
jest.mock('react-dates', () => {
  const { Component } = require('react');

  class DateRangePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { DateRangePicker };
});
jest.mock('react-phone-number-input', () => {
  const { Component } = require('react');

  return class PhoneInput extends Component {
    render() {
      return <div />;
    }
  };
});

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { propertyOptions } from './mock-data/options';
import { Component as Contact } from './component';

const getContact = extraProps => mount(<Contact {...extraProps} />);

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

  describe('if `isBotProtected` === true', () => {
    it('should render the right structure', () => {
      const wrapper = getContact({
        isBotProtected: true,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `isPrivacyConsentRequired` is `truthy`', () => {
    it('should render the right structure', () => {
      const wrapper = getContact({
        isPrivacyConsentRequired: true,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `Contact`', () => {
    expectComponentToHaveDisplayName(Contact, 'Contact');
  });
});
