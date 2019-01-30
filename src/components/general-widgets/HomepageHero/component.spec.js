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
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as HomepageHero } from './component';

const props = {
  activeNavigationItemIndex: 1,
  backgroundImageSizes: 'url',
  backgroundImageSrcSet: 'a load of sizes',
  backgroundImageUrl: 'bare sources',
  headerLogoSizes: 'a load of logo sizes',
  headerLogoSrc: 'src',
  headerLogoSrcSet: 'a load of logo src sets',
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

const getHomepageHero = () => shallow(<HomepageHero {...props} />);

describe('HomepageHero', () => {
  describe('`handleClickSearchBarSearchButton`', () => {
    it('should set state with the right value', () => {
      const wrapper = getHomepageHero();

      wrapper.instance().handleClickSearchBarSearchButton();

      const actual = wrapper.state('isSearchBarModalOpen');

      expect(actual).toBe(true);
    });
  });

  describe('`handleCloseModal`', () => {
    it('should set state with the right value', () => {
      const wrapper = getHomepageHero();

      wrapper.setState({ isSearchBarModalOpen: true });
      wrapper.instance().handleCloseModal();

      const actual = wrapper.state('isSearchBarModalOpen');

      expect(actual).toBe(undefined);
    });
  });

  it('should render the right structure', () => {
    const actual = mount(<HomepageHero {...props} />);

    expect(actual).toMatchSnapshot();
  });

  it('should have the displayName `HomepageHero`', () => {
    expectComponentToHaveDisplayName(HomepageHero, 'HomepageHero');
  });
});
