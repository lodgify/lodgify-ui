import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Button } from 'elements/Button';
import { Heading } from 'typography/Heading';
import { Submenu } from 'elements/Submenu';

import { Component as Header } from './component';
import { navigationItems } from './mock-data/navigationItems';

const logoText = 'someLogoText';
const primaryCTA = { href: 'someHref', text: 'someText' };

const getHeader = props =>
  shallow(
    <Header logoText={logoText} navigationItems={navigationItems} {...props} />
  );

describe('<Header />', () => {
  it('should render a single Semantic UI `Menu` component', () => {
    const wrapper = getHeader();
    expectComponentToBe(wrapper, Menu);
  });

  describe('the Semantic UI `Menu` component', () => {
    it('should have the right props', () => {
      const wrapper = getHeader();
      expectComponentToHaveProps(wrapper, { borderless: true });
    });

    it('should render the right children', () => {
      const wrapper = getHeader();
      expectComponentToHaveChildren(wrapper, Menu.Item, Menu.Menu);
    });
  });

  describe('the first Semantic UI `Menu.Item` component', () => {
    it('should have props', () => {
      const wrapper = getHeader()
        .find(Menu)
        .children(Menu.Item);
      expectComponentToHaveProps(wrapper, { href: '/', link: true });
    });

    it('should render a single child', () => {
      const wrapper = getHeader()
        .find(Menu)
        .children(Menu.Item);
      expectComponentToHaveChildren(wrapper, Heading);
    });

    describe('the Heading component', () => {
      it('should render a Lodgify UI `Heading` component by default with the right props', () => {
        const wrapper = getHeader()
          .find(Menu)
          .children(Menu.Item)
          .find(Heading);
        expectComponentToHaveProps(wrapper, {
          children: logoText,
          size: 'small',
        });
      });
    });
  });

  describe('the first Semantic UI `Menu.Menu` component', () => {
    it('should have prop `position` set as `right`', () => {
      const wrapper = getHeader({
        logoText,
        navigationItems,
      })
        .find(Menu)
        .children(Menu.Menu);
      expectComponentToHaveProps(wrapper, { position: 'right' });
    });

    it('should render a Lodgify UI `Submenu` component for each navigation item with sub items', () => {
      const wrapper = getHeader({
        logoText,
        navigationItems,
      })
        .find(Menu)
        .children(Menu.Menu)
        .find(Submenu);

      expectComponentToBe(wrapper, Submenu);
    });

    it('should render a Semantic UI `Menu.Item` component for each navigation item which is a link', () => {
      const wrapper = getHeader({
        logoText,
        navigationItems,
      })
        .find(Menu.Menu)
        .children(Menu.Item);
      expect(wrapper).toHaveLength(1);
    });

    it('should render a Semantic UI `Menu.Item` component for the primary cta if required', () => {
      const wrapper = getHeader({
        primaryCTA,
      })
        .find(Button)
        .parent();
      expectComponentToBe(wrapper, Menu.Item);
    });
  });

  describe('each `Submenu` component', () => {
    it('should get the right props', () => {
      const { subItems, text } = navigationItems[1];
      const wrapper = getHeader().find(Submenu);

      expectComponentToHaveProps(wrapper, {
        isMenuItem: true,
        isSimple: true,
        isTriggerUnderlined: false,
        isTriggeredOnHover: true,
        items: subItems,
        children: text,
      });
    });

    it('should get `props.isTriggerUnderlined = true` if required', () => {
      const wrapper = getHeader({
        activeNavigationItemIndex: 1,
      }).find(Submenu);

      expectComponentToHaveProps(wrapper, { isTriggerUnderlined: true });
    });
  });

  describe('each child `Menu.Item` component', () => {
    it('should get the right props', () => {
      const { href, text } = navigationItems[0];
      const wrapper = getHeader()
        .find(Menu.Item)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        active: false,
        link: true,
        href,
        children: text,
      });
    });

    it('should get `props.active = true` if required', () => {
      const wrapper = getHeader({
        activeNavigationItemIndex: 0,
      })
        .find(Menu.Item)
        .at(1);

      expectComponentToHaveProps(wrapper, { active: true });
    });
  });

  describe('the child `Menu.Item` component for the primary CTA', () => {
    it('should get the right props', () => {
      const wrapper = getHeader({
        primaryCTA,
      })
        .find(Menu.Item)
        .at(2);

      expectComponentToHaveProps(wrapper, {
        className: 'no-underline',
        link: true,
        href: primaryCTA.href,
      });
    });

    describe('the Lodgify UI `Button`', () => {
      it('should render a Lodgify UI `Button` component', () => {
        const wrapper = getHeader({
          primaryCTA,
        })
          .find(Menu.Item)
          .at(2);
        expectComponentToHaveChildren(wrapper, Button);
      });

      it('should have the right children', () => {
        const wrapper = getHeader({
          primaryCTA,
        }).find(Button);
        expectComponentToHaveChildren(wrapper, primaryCTA.text);
      });
    });
  });

  it('should have `displayName` Header', () => {
    expectComponentToHaveDisplayName(Header, 'Header');
  });
});
