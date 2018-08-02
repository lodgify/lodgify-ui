import React from 'react';
import { shallow } from 'enzyme';
import { Menu, Accordion } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { SearchBar } from 'general-widgets/SearchBar';
import { Modal } from 'elements/Modal';
import { Icon, ICON_NAMES } from 'elements/Icon';

import { navigationItems } from '../mock-data/navigationItems';

import { getMobileMenuMarkup } from './getMobileMenuMarkup';

const logoSrc = 'someLogoSrc';
const logoText = 'someLogoText';
const searchBarGuestsOptions = [];
const searchBarLocationOptions = [];

const getMarkupAsRenderedComponent = extraProps =>
  shallow(
    <div>
      {getMobileMenuMarkup({
        activeNavigationItemIndex: 0,
        logoSrc,
        logoText,
        navigationItems,
        searchBarGuestsOptions,
        searchBarLocationOptions,
        ...extraProps,
      })}
    </div>
  );

const getChildOfFragment = (index, extraProps) =>
  getMarkupAsRenderedComponent(extraProps)
    .children()
    .first()
    .children()
    .at(index);

describe('getMobileMenuMarkup', () => {
  it('should render a Semantic UI `Menu.Item` component as the first child of the fragment', () => {
    const wrapper = getChildOfFragment(0);

    expectComponentToBe(wrapper, Menu.Item);
  });

  describe('the first `Menu.Item` component', () => {
    it('should render a Lodgify UI `SearchBar` component', () => {
      const wrapper = getChildOfFragment(0);

      expectComponentToHaveChildren(wrapper, SearchBar);
    });
  });

  describe('the `SearchBar` component', () => {
    it('should have the right props', () => {
      const wrapper = getChildOfFragment(0).find(SearchBar);

      expectComponentToHaveProps(wrapper, {
        guestsOptions: searchBarGuestsOptions,
        isDisplayedAsModal: true,
        locationOptions: searchBarLocationOptions,
      });
    });
  });

  it('should render a Semantic UI `Menu.Item` component as the second child of the fragment', () => {
    const wrapper = getChildOfFragment(1);

    expectComponentToBe(wrapper, Menu.Item);
  });

  describe('the second `Menu.Item` component', () => {
    it('should render a Lodgify UI `Modal` component', () => {
      const wrapper = getChildOfFragment(1);

      expectComponentToHaveChildren(wrapper, Modal);
    });
  });

  describe('the `Modal` component', () => {
    const getModal = () => getChildOfFragment(1).find(Modal);

    it('should have the right props', () => {
      const wrapper = getModal();

      expectComponentToHaveProps(wrapper, {
        isFullscreen: true,
        trigger: <Icon name={ICON_NAMES.BARS} />,
      });
    });

    it('should have the right children', () => {
      const wrapper = getModal();

      expectComponentToHaveChildren(wrapper, Menu);
    });
  });

  describe('the `Menu` component', () => {
    const getMenu = () => getChildOfFragment(1).find(Menu);

    it('should have the right props', () => {
      const wrapper = getMenu();

      expectComponentToHaveProps(wrapper, {
        text: true,
        vertical: true,
      });
    });

    it('should have the right children', () => {
      const wrapper = getMenu();

      expectComponentToHaveChildren(wrapper, Menu.Item, Menu.Item, Accordion);
    });
  });

  describe('each `Accordion` component', () => {
    it('should have the right props', () => {
      const wrapper = getChildOfFragment(1).find(Accordion);

      expectComponentToHaveProps(wrapper, {
        as: Menu.Item,
        panels: [
          {
            title: {
              content: navigationItems[1].text,
              key: expect.any(String),
            },
            content: {
              content: expect.any(Array),
              key: expect.any(String),
            },
          },
        ],
      });
    });
  });
});
