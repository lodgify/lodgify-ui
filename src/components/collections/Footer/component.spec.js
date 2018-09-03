import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';
import { Menu } from 'semantic-ui-react';

import { Container } from 'layout/Container';
import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Divider } from 'elements/Divider';
import { Submenu } from 'elements/Submenu';
import { Icon } from 'elements/Icon';

import { Component as Footer } from './component';

const copyrightText = '\u00A9 2018 Feline Vacations. All rights reserved.';
const currencyOptions = [
  { text: 'EUR', value: 'EUR' },
  { text: 'USD', value: 'USD' },
];
const languageOptions = [
  { text: 'English', value: 'en' },
  { text: 'German', value: 'de' },
];
const navigationItems = [{ href: '/', text: 'Home' }];
const groupedNavigationItems = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' },
  {
    text: 'The Property',
    subItems: [{ href: '/pool', text: 'Pool' }],
  },
];
const onChangeCurrency = () => {};
const onChangeLanguage = () => {};
const phoneNumber = '+1 2345 678912';
const propertyAddress = 'The Cat House, Pawprint Way, Catania 08012';
const socialMediaLinks = [
  { href: 'https://twitter.com/lodgify', iconName: 'leaf' },
  { href: 'https://instagram.com/lodgify', iconName: 'paw' },
];

const getFooter = otherProps =>
  shallow(
    <Footer
      currencyOptions={currencyOptions}
      languageOptions={languageOptions}
      navigationItems={navigationItems}
      onChangeCurrency={onChangeCurrency}
      onChangeLanguage={onChangeLanguage}
      phoneNumber={phoneNumber}
      propertyAddress={propertyAddress}
      {...otherProps}
    />
  );

describe('<Footer />', () => {
  it('should render a single `div.is-footer` element', () => {
    const wrapper = getFooter();

    expectComponentToBe(wrapper, 'div.is-footer');
  });

  describe('the `div.is-footer` element', () => {
    it('should have the right children', () => {
      const wrapper = getFooter();

      expectComponentToHaveChildren(wrapper, 'div', 'div');
    });
  });

  describe('the `div.top-navigation`', () => {
    it('should have the right children', () => {
      const wrapper = getFooter()
        .find('div.top-navigation')
        .at(0);

      expectComponentToHaveChildren(wrapper, Container);
    });

    it('should have the right props', () => {
      const wrapper = getFooter()
        .find('div.top-navigation')
        .at(0);

      expectComponentToHaveProps(wrapper, {
        className: 'top-navigation',
      });
    });
  });

  describe('the `div.bottom-navigation`', () => {
    it('should have the right children', () => {
      const wrapper = getFooter()
        .find('div.bottom-navigation')
        .at(0);

      expectComponentToHaveChildren(wrapper, Container);
    });

    it('should have the right props', () => {
      const wrapper = getFooter()
        .find('div.bottom-navigation')
        .at(0);

      expectComponentToHaveProps(wrapper, {
        className: 'bottom-navigation',
      });
    });
  });

  describe('the first `Container` component', () => {
    const getFirstMenu = () =>
      getFooter()
        .find(Container)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstMenu();

      expectComponentToHaveProps(wrapper, {
        borderless: true,
        inverted: true,
        stackable: true,
        as: Menu,
      });
    });

    it('should have the right children', () => {
      const wrapper = getFirstMenu();

      expectComponentToHaveChildren(wrapper, Menu.Item);
    });
  });

  describe('if `props.navigationItems` are grouped', () => {
    const getFirstMenuWithGroupeNavigationItems = () =>
      getFooter({ navigationItems: groupedNavigationItems })
        .find(Container)
        .at(0);

    describe('the first `Menu` component', () => {
      it('should have the right children', () => {
        const wrapper = getFirstMenuWithGroupeNavigationItems();

        expectComponentToHaveChildren(wrapper, Menu.Item, Menu.Item);
      });
    });

    describe('each `Menu.Item` component in the first `Menu` component', () => {
      it('should have a child `Menu.Menu` component', () => {
        const wrappers = [
          getFirstMenuWithGroupeNavigationItems()
            .children(Menu.Item)
            .at(0),
          getFirstMenuWithGroupeNavigationItems()
            .children(Menu.Item)
            .at(1),
        ];

        wrappers.forEach(wrapper => {
          expectComponentToHaveChildren(wrapper, Menu.Menu);
        });
      });
    });

    describe('each `Menu.Menu` component in the first `Menu` component', () => {
      describe('if the navigation item group as no `text` property', () => {
        it('should have the right children', () => {
          const wrapper = getFirstMenuWithGroupeNavigationItems()
            .find(Menu.Menu)
            .at(0);

          expectComponentToHaveChildren(wrapper, Menu.Item, Menu.Item);
        });
      });

      describe('if the navigation item group has a `text` property', () => {
        it('should have the right children', () => {
          const wrapper = getFirstMenuWithGroupeNavigationItems()
            .find(Menu.Menu)
            .at(1);

          expectComponentToHaveChildren(wrapper, Menu.Header, Menu.Item);
        });
      });
    });
  });

  const getSecondMenu = otherProps =>
    getFooter(otherProps)
      .find(Container)
      .at(1);

  describe('the second `Menu` component', () => {
    it('should have the right props', () => {
      const wrapper = getSecondMenu();

      expectComponentToHaveProps(wrapper, {
        borderless: true,
        inverted: true,
        stackable: true,
        as: Menu,
      });
    });

    it('should have the right children', () => {
      const wrapper = getSecondMenu();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(3, Menu.Item),
        Divider,
        Menu.Item
      );
    });

    describe('if `socialMediaLinks` has length > 0', () => {
      it('should have the right children', () => {
        const wrapper = getSecondMenu({ socialMediaLinks });

        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(3, Menu.Item),
          Menu.Menu,
          Divider,
          Menu.Item
        );
      });
    });
  });

  describe('the first `Menu.Item` component in the second `Menu` component', () => {
    it('should have the right children', () => {
      const wrapper = getSecondMenu()
        .children(Menu.Item)
        .at(0);

      expectComponentToHaveChildren(wrapper, Submenu);
    });
  });

  describe('the first `Submenu` component', () => {
    it('should have the right props', () => {
      const wrapper = getFooter()
        .find(Submenu)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        items: languageOptions,
        name: 'language',
        onChange: onChangeLanguage,
        willOpenAbove: true,
      });
    });
  });

  describe('the second `Menu.Item` component in the second `Menu` component', () => {
    it('should have the right children', () => {
      const wrapper = getSecondMenu()
        .children(Menu.Item)
        .at(1);

      expectComponentToHaveChildren(wrapper, Submenu);
    });
  });

  describe('the second `Submenu` component', () => {
    it('should have the right props', () => {
      const wrapper = getFooter()
        .find(Submenu)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        items: currencyOptions,
        name: 'currency',
        onChange: onChangeCurrency,
        willOpenAbove: true,
      });
    });
  });

  describe('the third `Menu.Item` component in the second `Menu` component', () => {
    it('should have the right children', () => {
      const wrapper = getSecondMenu()
        .children(Menu.Item)
        .at(2);

      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('the `Icon` component in the third `Menu.Item`', () => {
    it('should have the right props', () => {
      const wrapper = getFooter()
        .find(Icon)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        labelText: phoneNumber,
        name: 'phone',
      });
    });
  });

  const getSocialMediaMenuMenu = () =>
    getSecondMenu({ socialMediaLinks }).children(Menu.Menu);

  describe('the `Menu.Menu` component containing the `socialMediaLinks`', () => {
    it('should have the right props', () => {
      const wrapper = getSocialMediaMenuMenu();

      expectComponentToHaveProps(wrapper, { position: 'right' });
    });

    it('should have the right children', () => {
      const wrapper = getSocialMediaMenuMenu();

      expectComponentToHaveChildren(wrapper, Menu.Item, Menu.Item);
    });
  });

  describe('each `Menu.Item` component containing a social media link', () => {
    const getSocialMediaMenuItem = () =>
      getSocialMediaMenuMenu()
        .children(Menu.Item)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getSocialMediaMenuItem();

      expectComponentToHaveProps(wrapper, {
        href: socialMediaLinks[0].href,
        link: true,
      });
    });

    it('should have the right children', () => {
      const wrapper = getSocialMediaMenuItem();

      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('each `Icon` component representing a social media link', () => {
    it('should have the right props', () => {
      const wrapper = getSocialMediaMenuMenu()
        .find(Icon)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        name: socialMediaLinks[0].iconName,
        path: null,
      });
    });
  });

  describe('the `Divider` component', () => {
    it('should have the right props', () => {
      const wrapper = getSecondMenu().find(Divider);

      expectComponentToHaveProps(wrapper, {
        hasLine: true,
      });
    });
  });

  describe('the `Menu.Item` displaying the `propertyAddress`', () => {
    it('should have the right children', () => {
      const wrapper = getSecondMenu()
        .children(Menu.Item)
        .at(3);

      expectComponentToHaveChildren(wrapper, propertyAddress);
    });
  });

  describe('if `props.copyrightText` is passed', () => {
    const getSecondMenuWithCopyright = () => getSecondMenu({ copyrightText });
    const getCopyrightMenuItem = () =>
      getSecondMenuWithCopyright()
        .children(Menu.Item)
        .at(4);

    describe('the second `Menu` component', () => {
      it('should render the right children', () => {
        const wrapper = getSecondMenu({ copyrightText });

        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(3, Menu.Item),
          Divider,
          ...getArrayOfLengthOfItem(2, Menu.Item)
        );
      });
    });

    describe('the extra `Menu.Item`', () => {
      it('should have the right props', () => {
        const wrapper = getCopyrightMenuItem();

        expectComponentToHaveProps(wrapper, {
          position: 'right',
        });
      });

      it('should have the right children', () => {
        const wrapper = getCopyrightMenuItem();

        expectComponentToHaveChildren(
          wrapper,
          '© 2018 Feline Vacations. All rights reserved.'
        );
      });
    });
  });

  it('should have `displayName` Footer', () => {
    expectComponentToHaveDisplayName(Footer, 'Footer');
  });
});
