import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Header } from './component';
import { navigationItems } from './mock-data/navigationItems';

const logoText = 'someLogoText';
const primaryCTA = { href: 'someHref', text: 'someText' };

describe('<Header />', () => {
  it('should render a single Semantic UI `Menu` component', () => {
    const header = shallow(
      <Header logoText={logoText} navigationItems={navigationItems} />
    );
    const actual = header.find('Menu');
    expect(actual).toHaveLength(1);
  });

  describe('the Semantic UI `Menu` component', () => {
    it('should have prop `borderless === true`', () => {
      const semanticMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      ).find('Menu');
      const actual = semanticMenu.prop('borderless');
      expect(actual).toBe(true);
    });

    it('should render only two children', () => {
      const semanticMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      ).find('Menu');
      const actual = semanticMenu.children();
      expect(actual).toHaveLength(2);
    });

    it('should first render a Semantic UI `Menu.Item`', () => {
      const semanticMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      ).find('Menu');
      const actual = semanticMenu.children('MenuItem');
      expect(actual).toHaveLength(1);
    });

    it('should next render a Semantic UI `Menu.Menu`', () => {
      const semanticMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      ).find('Menu');
      const actual = semanticMenu.children('MenuMenu');
      expect(actual).toHaveLength(1);
    });
  });

  describe('the top-level Semantic UI `Menu.Item` component', () => {
    it('should have props `link` and `href` set correctly', () => {
      const semanticMenuItem = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      )
        .find('Menu')
        .children('MenuItem');
      const actual = semanticMenuItem.props();
      expect(actual).toEqual(
        expect.objectContaining({
          href: '/',
          link: true,
        })
      );
    });

    it('should render a single child', () => {
      const semanticMenuItem = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      )
        .find('Menu')
        .children('MenuItem');
      const actual = semanticMenuItem.children();
      expect(actual).toHaveLength(1);
    });

    it('should render a Lodgify UI `Heading` component by default', () => {
      const semanticMenuItem = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      )
        .find('Menu')
        .children('MenuItem');
      const actual = semanticMenuItem.children('Heading');
      expect(actual).toHaveLength(1);
      expect(actual.props()).toEqual(
        expect.objectContaining({ children: logoText, size: 'small' })
      );
    });

    it('should render a Semantic UI `Image` component if `props.logoSrc` is a string', () => {
      const logoSrc = 'someLogoSrc';
      const semanticMenuItem = shallow(
        <Header
          logoSrc={logoSrc}
          logoText={logoText}
          navigationItems={navigationItems}
        />
      )
        .find('Menu')
        .children('MenuItem');
      const actual = semanticMenuItem.children('Image');
      expect(actual).toHaveLength(1);
      expect(actual.props()).toEqual(
        expect.objectContaining({ alt: logoText, src: logoSrc })
      );
    });
  });

  describe('the top-level Semantic UI `Menu.Menu` component', () => {
    it('should have prop `position` set as `right`', () => {
      const semanticMenuMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.prop('position');
      expect(actual).toBe('right');
    });

    it('should render a Lodgify UI `Submenu` component for each navigation item with sub items', () => {
      const semanticMenuMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.children('Submenu');
      expect(actual).toHaveLength(1);
    });

    it('should render a Semantic UI `Menu.Item` component for each navigation item which is a link', () => {
      const semanticMenuMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.children('MenuItem');
      expect(actual).toHaveLength(1);
    });

    it('should render a Semantic UI `Menu.Item` component for the primary cta if required', () => {
      const semanticMenuMenu = shallow(
        <Header
          logoText={logoText}
          navigationItems={navigationItems}
          primaryCTA={primaryCTA}
        />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.children('MenuItem');
      expect(actual).toHaveLength(2);
    });
  });

  describe('each `Submenu` component', () => {
    it('should get the right props', () => {
      const semanticMenuMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.children('Submenu').props();
      const { subItems, text } = navigationItems[1];
      expect(actual).toEqual(
        expect.objectContaining({
          isMenuItem: true,
          isSimple: true,
          isTriggerUnderlined: false,
          isTriggeredOnHover: true,
          items: subItems,
          children: text,
        })
      );
    });

    it('should get `props.isTriggerUnderlined = true` if required', () => {
      const semanticMenuMenu = shallow(
        <Header
          activeNavigationItemIndex={1}
          logoText={logoText}
          navigationItems={navigationItems}
        />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu
        .children('Submenu')
        .prop('isTriggerUnderlined');
      expect(actual).toBe(true);
    });
  });

  describe('each child `Menu.Item` component', () => {
    it('should get the right props', () => {
      const semanticMenuMenu = shallow(
        <Header logoText={logoText} navigationItems={navigationItems} />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.children('MenuItem').props();
      const { href, text } = navigationItems[0];
      expect(actual).toEqual(
        expect.objectContaining({
          active: false,
          link: true,
          href,
          children: text,
        })
      );
    });

    it('should get `props.active = true` if required', () => {
      const semanticMenuMenu = shallow(
        <Header
          activeNavigationItemIndex={0}
          logoText={logoText}
          navigationItems={navigationItems}
        />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.children('MenuItem').prop('active');
      expect(actual).toBe(true);
    });
  });

  describe('the child `Menu.Item` component for the primary CTA', () => {
    it('should get the right props', () => {
      const semanticMenuMenu = shallow(
        <Header
          logoText={logoText}
          navigationItems={navigationItems}
          primaryCTA={primaryCTA}
        />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.childAt(2).props();
      expect(actual).toEqual(
        expect.objectContaining({
          className: 'no-underline',
          link: true,
          href: primaryCTA.href,
        })
      );
    });

    it('should render a Lodgify UI `Button` component with text', () => {
      const semanticMenuMenu = shallow(
        <Header
          logoText={logoText}
          navigationItems={navigationItems}
          primaryCTA={primaryCTA}
        />
      )
        .find('Menu')
        .children('MenuMenu');
      const actual = semanticMenuMenu.childAt(2).find('Button');
      expect(actual).toHaveLength(1);
      expect(actual.prop('children')).toBe(primaryCTA.text);
    });
  });

  it('should have `displayName` Header', () => {
    expectComponentToHaveDisplayName(Header, 'Header');
  });
});
