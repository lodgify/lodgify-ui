import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as HomepageHero } from './component';

const props = {
  activeNavigationItemIndex: 1,
  backgroundImageUrl: 'url',
  headerLogoSrc: 'src',
  headerLogoText: 'text',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { onClick: Function.prototype, text: 'Book now' },
  headingText: 'heading text',
  searchBarGetIsDayBlocked: Function.prototype,
  searchBarGuestsOptions: [{ text: '1', value: '1' }],
  searchBarLocationOptions: [{ text: '1', value: '1' }],
  searchBarOnChangeInput: Function.prototype,
  searchBarOnSubmit: Function.prototype,
  searchBarSearchButton: <button>search button</button>,
};

const getHomepageHero = () => mount(<HomepageHero {...props} />);

describe('HomepageHero', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getHomepageHero();

      expect(actual).toMatchSnapshot();
    });
  });
  it('should have the displayName `HomepageHero`', () => {
    expectComponentToHaveDisplayName(HomepageHero, 'HomepageHero');
  });
});
