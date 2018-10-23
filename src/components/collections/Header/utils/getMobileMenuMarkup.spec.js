import React from 'react';
import { mount } from 'enzyme';

import { navigationItems } from '../mock-data/navigationItems';

import { getMobileMenuMarkup } from './getMobileMenuMarkup';

const logoSrc = 'someLogoSrc';
const logoText = 'someLogoText';
const searchBarGuestsOptions = [{ text: '1', value: 1 }];
const searchBarLocationOptions = [{ text: 'Catania', value: 'catania' }];
const searchBarGetIsDayBlocked = Function.prototype;
const searchBarOnSubmit = Function.prototype;
const searchBarModalHeadingText = 'someHeadingText';
const searchBarSearchButton = 'button boy';

const getMarkupAsRenderedComponent = extraProps =>
  mount(
    <div>
      {getMobileMenuMarkup({
        activeNavigationItemIndex: 0,
        searchBarGetIsDayBlocked,
        logoSrc,
        logoText,
        navigationItems,
        searchBarModalHeadingText,
        searchBarSearchButton,
        searchBarOnSubmit,
        ...extraProps,
      })}
    </div>
  )
    .children()
    .first();

describe('getMobileMenuMarkup', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getMarkupAsRenderedComponent();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.searchBarGuestsOptions` and `props.searchBarLocationOptions` are defined and populated', () => {
    const getSearchBarMenuItem = () =>
      getMarkupAsRenderedComponent({
        searchBarGuestsOptions,
        searchBarLocationOptions,
      });

    it('should render the right structure', () => {
      const actual = getSearchBarMenuItem();

      expect(actual).toMatchSnapshot();
    });
  });
});
