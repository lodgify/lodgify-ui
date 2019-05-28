import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Hero } from './component';

const props = {
  activeNavigationItemIndex: 1,
  backgroundImageUrl: 'https://darkpurple.com',
  backgroundImageSizes: 'a load of sizes',
  backgroundImageSrcSet: 'a load of sources',
  headerLogoSizes: 'a load of logo sizes',
  headerLogoSrc: 'https://darkgreen.com',
  headerLogoSrcSet: 'a load of logo src sets',
  headerLogoText: 'Livingstone Cottage',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { onClick: Function.prototype, text: 'Book now' },
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
