jest.mock('react-dates', () => {
  const { Component } = require('react');

  class DateRangePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { DateRangePicker };
});

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { roomOptions, propertyOptions } from './mock-data/options';
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

  it('should have `displayName` `Contact`', () => {
    expectComponentToHaveDisplayName(Contact, 'Contact');
  });
});
