import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Hero } from 'collections/Hero';
import { FlexContainer } from 'layout/FlexContainer';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';

import { ComponentWithResponsive as HomepageHero } from './component';

const props = {
  activeNavigationItemIndex: 1,
  backgroundImageUrl: 'url',
  headerLogoSrc: 'src',
  headerLogoText: 'text',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { href: '/book', text: 'Book now' },
  headingText: 'heading text',
  searchBarGetIsDayBlocked: Function.prototype,
  searchBarGuestsOptions: [{ text: '1', value: '1' }],
  searchBarLocationOptions: [{ text: '1', value: '1' }],
  searchBarOnSubmit: Function.prototype,
  searchBarSearchButton: <button>search button</button>,
};

const getHomepageHero = () => shallow(<HomepageHero {...props} />);

const getWrappedHomepageHero = extraProps => {
  const Child = getHomepageHero().prop('as');

  return shallow(<Child isUserOnMobile={false} {...props} {...extraProps} />);
};

describe('HomepageHero', () => {
  it('should render a single `Hero` component', () => {
    const wrapper = getWrappedHomepageHero();

    expectComponentToBe(wrapper, Hero);
  });

  describe('the `Hero` component', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedHomepageHero();

      expectComponentToHaveProps(wrapper, {
        activeNavigationItemIndex: props.activeNavigationItemIndex,
        backgroundImageUrl: props.backgroundImageUrl,
        headerLogoSrc: props.headerLogoSrc,
        headerLogoText: props.headerLogoText,
        headerNavigationItems: props.headerNavigationItems,
        headerPrimaryCTA: props.headerPrimaryCTA,
        headerSearchBarGuestsOptions: props.searchBarGuestsOptions,
        headerSearchBarLocationOptions: props.searchBarLocationOptions,
        headerSearchBarSearchButton: props.searchBarSearchButton,
        searchBarGetIsDayBlocked: props.searchBarGetIsDayBlocked,
        searchBarOnSubmit: props.searchBarOnSubmit,
      });
    });

    it('should have the right children', () => {
      const wrapper = getWrappedHomepageHero();

      expectComponentToHaveChildren(wrapper, FlexContainer);
    });
  });

  describe('the `FlexContainer`', () => {
    const getFlexContainer = props =>
      getWrappedHomepageHero(props).find(FlexContainer);

    it('should have the right props', () => {
      const wrapper = getFlexContainer();

      expectComponentToHaveProps(wrapper, {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      });
    });

    it('should have the right children', () => {
      const wrapper = getFlexContainer();

      expectComponentToHaveChildren(
        wrapper,
        HorizontalGutters,
        HorizontalGutters
      );
    });

    describe('if `props.isUserOnMobile` is true', () => {
      it('should have the right children', () => {
        const wrapper = getFlexContainer({ isUserOnMobile: true });

        expectComponentToHaveChildren(wrapper, HorizontalGutters);
      });
    });
  });

  describe('the first `HorizontalGutters` component', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedHomepageHero()
        .find(HorizontalGutters)
        .first();

      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the `Heading`', () => {
    const getHeading = () => getWrappedHomepageHero().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();

      expectComponentToHaveProps(wrapper, {
        isColorInverted: true,
        size: 'huge',
        textAlign: 'center',
      });
    });

    it('should have the right children', () => {
      const wrapper = getHeading();

      expectComponentToHaveChildren(wrapper, props.headingText);
    });
  });

  describe('the second `HorizontalGutters` component', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedHomepageHero()
        .find(HorizontalGutters)
        .at(1);

      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  it('should have the displayName `HomepageHero`', () => {
    const wrapper = getHomepageHero().prop('as');

    expectComponentToHaveDisplayName(wrapper, 'HomepageHero');
  });
});
