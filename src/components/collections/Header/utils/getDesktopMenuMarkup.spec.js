import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Submenu } from 'elements/Submenu';
import { Button } from 'elements/Button';

import { navigationItems } from '../mock-data/navigationItems';

import { getDesktopMenuMarkup } from './getDesktopMenuMarkup';

const getMarkupAsRenderedComponent = extraProps =>
  shallow(
    <div>
      {getDesktopMenuMarkup({
        activeNavigationItemIndex: 0,
        navigationItems,
        ...extraProps,
      })}
    </div>
  );

describe('getDesktopMenuMarkup', () => {
  it('should render the right children', () => {
    const wrapper = getMarkupAsRenderedComponent();

    expectComponentToHaveChildren(wrapper, Menu.Item, Submenu);
  });

  describe('the `Submenu` component', () => {
    const getSubmenu = extraProps =>
      getMarkupAsRenderedComponent(extraProps).find(Submenu);

    it('should get the right props', () => {
      const { subItems, text } = navigationItems[1];
      const wrapper = getSubmenu();

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
      const wrapper = getSubmenu({
        activeNavigationItemIndex: 1,
      });

      expectComponentToHaveProps(wrapper, { isTriggerUnderlined: true });
    });
  });

  describe('if `props.primaryCTA` is passed', () => {
    const primaryCTA = { href: 'someHref', text: 'someText' };
    const getMenuItem = () =>
      getMarkupAsRenderedComponent({ primaryCTA })
        .find(Menu.Item)
        .at(1);

    it('should render an extra Semantic UI `Menu.Item`', () => {
      const wrapper = getMarkupAsRenderedComponent({ primaryCTA })
        .children()
        .at(2);

      expectComponentToBe(wrapper, Menu.Item);
    });

    describe('the `Menu.Item` component ', () => {
      it('should get the right props', () => {
        const wrapper = getMenuItem();

        expectComponentToHaveProps(wrapper, {
          className: 'no-underline',
          href: primaryCTA.href,
          link: true,
        });
      });

      describe('the Lodgify UI `Button`', () => {
        it('should render a Lodgify UI `Button` component', () => {
          const wrapper = getMenuItem();

          expectComponentToHaveChildren(wrapper, Button);
        });

        it('should have the right children', () => {
          const wrapper = getMenuItem().find(Button);

          expectComponentToHaveChildren(wrapper, primaryCTA.text);
        });
      });
    });
  });
});
