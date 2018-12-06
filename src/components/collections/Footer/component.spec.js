import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Footer } from './component';

const copyrightText = '\u00A9 2018 Feline Vacations. All rights reserved.';
const currencyOptions = [
  { text: 'EUR', value: 'EUR' },
  { text: 'USD', value: 'USD' },
];
const languageOptions = [
  { text: 'English', value: 'en' },
  { text: 'German', value: 'de' },
];
const navigationItems = [{ href: '/', text: 'Home' }];
const groupedNavigationItems = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' },
  {
    text: 'The Property',
    subItems: [{ href: '/pool', text: 'Pool' }],
  },
];
const onChangeCurrency = () => {};
const onChangeLanguage = () => {};
const phoneNumber = '+1 2345 678912';
const propertyAddress = 'The Cat House, Pawprint Way, Catania 08012';
const socialMediaLinks = [
  { href: 'https://twitter.com/lodgify', iconName: 'leaf' },
  { href: 'https://instagram.com/lodgify', iconName: 'paw' },
];

const getFooter = otherProps =>
  mount(
    <Footer
      currencyOptions={currencyOptions}
      languageOptions={languageOptions}
      navigationItems={navigationItems}
      onChangeCurrency={onChangeCurrency}
      onChangeLanguage={onChangeLanguage}
      phoneNumber={phoneNumber}
      propertyAddress={propertyAddress}
      {...otherProps}
    />
  );

describe('<Footer />', () => {
  it('should render the right structure', () => {
    const wrapper = getFooter();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.navigationItems` are grouped', () => {
    it('should render the right structure', () => {
      const wrapper = getFooter({ navigationItems: groupedNavigationItems });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `socialMediaLinks` has length > 0', () => {
    it('should render the right structure', () => {
      const wrapper = getFooter({ socialMediaLinks });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.copyrightText` is passed', () => {
    it('should render the right structure', () => {
      const wrapper = getFooter({ copyrightText });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` Footer', () => {
    expectComponentToHaveDisplayName(Footer, 'Footer');
  });
});
