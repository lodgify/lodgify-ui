import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Header } from 'collections/Header';
import { FullBleed } from 'media/FullBleed';

import { Component as Hero } from './component';

const props = {
  activeNavigationItemIndex: 1,
  backgroundImageUrl: 'https://darkpurple.com',
  heading: 'Heading',
  headerLogoSrc: 'https://darkgreen.com',
  headerLogoText: 'Livingstone Cottage',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { href: '/book', text: 'Book now' },
  headerSearchBarGuestsOptions: [{ href: 'someHref', text: 'someText' }],
  headerSearchBarLocationOptions: [
    { href: 'anotherHref', text: 'anotherText' },
  ],
  searchBarOnSubmit: Function.prototype,
};

const getHeroComponent = extraProps =>
  shallow(<Hero {...props} {...extraProps} />);

describe('<Hero />', () => {
  it('should render a single `FullBleed` component', () => {
    const wrapper = getHeroComponent();

    expectComponentToBe(wrapper, FullBleed);
  });

  it('should have the right props', () => {
    const wrapper = getHeroComponent();

    expectComponentToHaveProps(wrapper, {
      className: 'is-hero',
      hasGradient: true,
      imageUrl: 'https://darkpurple.com',
    });
  });

  it('should have the right children', () => {
    const wrapper = getHeroComponent();

    expectComponentToHaveChildren(wrapper, Header);
  });

  describe('the `Header` component', () => {
    it('should have the right props', () => {
      const wrapper = getHeroComponent().find(Header);

      expectComponentToHaveProps(wrapper, {
        activeNavigationItemIndex: props.activeNavigationItemIndex,
        logoSrc: props.headerLogoSrc,
        logoText: props.headerLogoText,
        navigationItems: props.headerNavigationItems,
        primaryCTA: props.headerPrimaryCTA,
        searchBarGuestsOptions: props.headerSearchBarGuestsOptions,
        searchBarLocationOptions: props.headerSearchBarLocationOptions,
        searchBarOnSubmit: props.searchBarOnSubmit,
      });
    });
  });

  describe('if `props.children` is passed', () => {
    it('should render the right children', () => {
      const children = '👶👶';
      const wrapper = getHeroComponent({
        children,
      });

      expectComponentToHaveChildren(wrapper, Header, children);
    });
  });

  it('should have the displayName `Hero`', () => {
    expectComponentToHaveDisplayName(Hero, 'Hero');
  });
});
