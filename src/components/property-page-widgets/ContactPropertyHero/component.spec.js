import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ContactPropertyHero } from './component';

const {
  backgroundImageUrl,
  navigationItems,
  currencyOptions,
  languageOptions,
} = require('./mock-data/mock-data');

const props = {
  backgroundImageUrl: 'backgroundImageUrl',
  headerNavigationItems: navigationItems,
  headerPrimaryCTA: { onClick: () => {}, text: 'Book now' },
  galleryImages: [
    { url: 'sa sa sa', descriptionText: 'Entrance' },
    { url: 'sa sa sa', descriptionText: 'Kitchen' },
  ],
  backgroundImageUrl: backgroundImageUrl,
  headingText: 'Lindblum',
  headerLogoText: 'aaa',
  className: 'ma - ma - ma',
  isBackgroundFilled: true,
  phoneNumber: '+1 2345 678912',
  headingHref: ' http://www.sss.com',
  currencyOptions: currencyOptions,
  currencyValue: currencyOptions[0].value,
  languageOptions: languageOptions,
  languageValue: languageOptions[0].value,
};

const getContactPropertyHero = extraProps =>
  shallow(<ContactPropertyHero {...props} {...extraProps} />);

describe('ContactPropertyHero', () => {
  it('should render the right structure', () => {
    const wrapper = getContactPropertyHero();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `galleryImages` is less than 2', () => {
    const wrapper = getContactPropertyHero({
      galleryImages: [{ url: 'sa sa sa', descriptionText: 'Entrance' }],
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should have the displayName `ContactPropertyHero`', () => {
    expectComponentToHaveDisplayName(
      ContactPropertyHero,
      'ContactPropertyHero'
    );
  });
});
