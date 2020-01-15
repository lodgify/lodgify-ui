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

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ContactHomeHero } from './component';
import {
  navigationItems,
  currencyOptions,
  languageOptions,
} from './mock-data/mock-data';

const props = {
  headerLogoText: 'aaa',
  backgroundImageUrl: 'backgroundImageUrl',
  headingText: 'Lindblum',
  className: 'ma-ma-ma',
  isBackgroundFilled: true,
  phoneNumber: '+1 2345 678912',
  headingHref: 'http://www.sss.com',
  currencyOptions: currencyOptions,
  currencyValue: currencyOptions[0].value,
  languageOptions: languageOptions,
  languageValue: languageOptions[0].value,
  headerNavigationItems: navigationItems,
};

describe('ContactHomeHero', () => {
  it('should render the right structure', () => {
    const actual = mount(<ContactHomeHero {...props} />);

    expect(actual).toMatchSnapshot();
  });

  it('should have the displayName `ContactHomeHero`', () => {
    expectComponentToHaveDisplayName(ContactHomeHero, 'ContactHomeHero');
  });
});
