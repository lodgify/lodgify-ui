import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Hero } from './component';

const props = {
  activeNavigationItemIndex: 1,
  backgroundImageUrl: 'https://darkpurple.com',
  headerLogoSrc: 'https://darkgreen.com',
  headerLogoText: 'Livingstone Cottage',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { onClick: Function.prototype, text: 'Book now' },
  headerSearchBarGuestsOptions: [{ href: 'someHref', text: 'someText' }],
  headerSearchBarLocationOptions: [
    { href: 'anotherHref', text: 'anotherText' },
  ],
  headerSearchBarModalHeadingText: 'Heading',
  searchBarOnChangeInput: Function.prototype,
  searchBarOnSubmit: Function.prototype,
};

const getHeroComponent = extraProps =>
  mount(<Hero {...props} {...extraProps} />);

describe('<Hero />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getHeroComponent();

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the displayName `Hero`', () => {
    expectComponentToHaveDisplayName(Hero, 'Hero');
  });
});
