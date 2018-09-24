import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Hero } from 'collections/Hero';

import { getSearchBarMarkup } from './utils/getSearchBarMarkup';
import { ComponentWithResponsive as HomepageHero } from './component';

const props = {
  backgroundImageUrl: 'url',
  getSearchBarIsDayBlocked: Function.prototype,
  headerLogoSrc: 'src',
  headerLogoText: 'text',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { href: '/book', text: 'Book now' },
  heading: 'heading text',
  isSearchBarDisplayedAsModal: false,
  isSearchBarShowingLocationDropdown: false,
  isSearchBarShowingSummary: false,
  searchBarGuestsOptions: [{ text: '1', value: '1' }],
  searchBarLocationOptions: [{ text: '1', value: '1' }],
  searchBarModalHeadingText: 'modal text',
  searchBarModalSummaryElement: <div>element</div>,
  searchBarModalTrigger: <button>trigger</button>,
  searchBarOnSubmit: Function.prototype,
  searchBarSearchButton: <button>search button</button>,
  searchBarSummaryElement: <h1>summary</h1>,
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

  describe('if `props.isUserOnMobile` is true', () => {
    it('should render a the `Hero` with the right props', () => {
      const wrapper = getWrappedHomepageHero({
        isUserOnMobile: true,
      });
      const actual = wrapper.find('Hero');

      expectComponentToHaveProps(actual, {
        backgroundImageUrl: props.backgroundImageUrl,
        headerLogoSrc: props.headerLogoSrc,
        headerLogoText: props.headerLogoText,
        headerNavigationItems: props.headerNavigationItems,
        headerPrimaryCTA: props.headerPrimaryCTA,
        headerSearchBarGuestsOptions: props.searchBarGuestsOptions,
        headerSearchBarLocationOptions: props.searchBarLocationOptions,
        heading: props.heading,
      });
    });
  });

  describe('if `props.isUserOnMobile` is false', () => {
    it('should render a the `Hero` with the right props', () => {
      const wrapper = getWrappedHomepageHero({
        isUserOnMobile: false,
      });
      const actual = wrapper.find('Hero');

      expectComponentToHaveProps(actual, {
        backgroundImageUrl: props.backgroundImageUrl,
        extraContent: getSearchBarMarkup({
          getIsDayBlocked: props.getSearchBarIsDayBlocked,
          isDisplayedAsModal: props.isSearchBarDisplayedAsModal,
          isShowingLocationDropdown: props.isSearchBarShowingLocationDropdown,
          isShowingSummary: props.isSearchBarShowingSummary,
          guestsOptions: props.searchBarGuestsOptions,
          locationOptions: props.searchBarLocationOptions,
          modalHeadingText: props.searchBarModalHeadingText,
          modalSummaryElement: props.searchBarModalSummaryElement,
          modalTrigger: props.searchBarModalTrigger,
          onSubmit: props.searchBarOnSubmit,
          searchButton: props.searchBarSearchButton,
          summaryElement: props.searchBarSummaryElement,
        }),
        headerLogoSrc: props.headerLogoSrc,
        headerLogoText: props.headerLogoText,
        headerNavigationItems: props.headerNavigationItems,
        headerPrimaryCTA: props.headerPrimaryCTA,
        heading: props.heading,
      });
    });
  });

  it('should have the displayName `HomepageHero`', () => {
    const component = getHomepageHero().prop('as');

    expectComponentToHaveDisplayName(component, 'HomepageHero');
  });
});
