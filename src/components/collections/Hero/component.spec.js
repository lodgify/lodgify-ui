import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Header } from 'collections/Header';
import { FullBleed } from 'media/FullBleed';
import { Heading } from 'typography/Heading';
import { Container } from 'layout/Container';

import { Component as Hero } from './component';

const props = {
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
};

const getHeroComponent = extraProps =>
  shallow(<Hero {...props} {...extraProps} />);
const getContainerComponent = extraProps =>
  getHeroComponent(extraProps).find(Container);

describe('<Hero />', () => {
  it('should render a single `Fragment` component', () => {
    const wrapper = getHeroComponent();

    expectComponentToBe(wrapper, Fragment);
  });

  describe('the `Fragment`', () => {
    const getFullBleed = () => getHeroComponent().childAt(0);

    it('should render a single `FullBleed` component', () => {
      const wrapper = getFullBleed();

      expectComponentToBe(wrapper, FullBleed);
    });

    it('should have the right props', () => {
      const wrapper = getFullBleed();

      expectComponentToHaveProps(wrapper, {
        className: 'is-hero',
        hasGradient: true,
        imageUrl: 'https://darkpurple.com',
      });
    });

    it('should have the right children', () => {
      const wrapper = getFullBleed();

      expectComponentToHaveChildren(wrapper, Header, Heading, Container);
    });
  });

  describe('the `Header` component', () => {
    it('should have the right props', () => {
      const wrapper = getHeroComponent().find(Header);

      expectComponentToHaveProps(wrapper, {
        logoSrc: props.headerLogoSrc,
        logoText: props.headerLogoText,
        navigationItems: props.headerNavigationItems,
        primaryCTA: props.headerPrimaryCTA,
        searchBarGuestsOptions: props.headerSearchBarGuestsOptions,
        searchBarLocationOptions: props.headerSearchBarLocationOptions,
      });
    });
  });

  describe('the `Heading` component', () => {
    const getHeadingComponent = () => getHeroComponent().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeadingComponent();

      expectComponentToHaveProps(wrapper, { size: 'huge' });
    });

    it('should have the right children', () => {
      const wrapper = getHeadingComponent();

      expectComponentToHaveChildren(wrapper, 'Heading');
    });
  });

  describe('the `Container` component', () => {
    it('should have the right props', () => {
      const wrapper = getContainerComponent();

      expectComponentToHaveProps(wrapper, { textAlign: 'center' });
    });
  });

  describe('if `props.extraContent` is passed', () => {
    const getGridWithExtraContent = () =>
      getContainerComponent({ extraContent: <div>yo</div> });

    describe('the `Container` component', () => {
      it('should render the right children', () => {
        const wrapper = getGridWithExtraContent().find(Container);

        expectComponentToHaveChildren(wrapper, 'div');
      });
    });
  });

  it('should have the displayName `Hero`', () => {
    expectComponentToHaveDisplayName(Hero, 'Hero');
  });
});
