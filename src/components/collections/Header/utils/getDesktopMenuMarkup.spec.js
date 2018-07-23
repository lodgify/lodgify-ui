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

const getChildOfFragment = (index, extraProps) =>
  getMarkupAsRenderedComponent(extraProps)
    .children()
    .first()
    .children()
    .at(index);

describe('getDesktopMenuMarkup', () => {
  it('should render the return value of `getLinkMarkup` as the first child of the fragment', () => {
    const wrapper = getChildOfFragment(0);
    expectComponentToBe(wrapper, Menu.Item);
  });

  it('should render a Lodgify UI `Submenu` as the second child of the fragment', () => {
    const wrapper = getChildOfFragment(1);
    expectComponentToBe(wrapper, Submenu);
  });

  describe('the `Submenu` component', () => {
    it('should get the right props', () => {
      const { subItems, text } = navigationItems[1];
      const wrapper = getChildOfFragment(1).find(Submenu);

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
      const wrapper = getChildOfFragment(1, {
        activeNavigationItemIndex: 1,
      }).find(Submenu);

      expectComponentToHaveProps(wrapper, { isTriggerUnderlined: true });
    });
  });

  describe('if `props.primaryCTA` is passed', () => {
    const primaryCTA = { href: 'someHref', text: 'someText' };

    it('should render a Semantic UI `Menu.Item` as the third child of the fragment', () => {
      const wrapper = getChildOfFragment(2, {
        primaryCTA,
      });
      expectComponentToBe(wrapper, Menu.Item);
    });

    describe('the `Menu.Item` component ', () => {
      it('should get the right props', () => {
        const wrapper = getChildOfFragment(2, {
          primaryCTA,
        });

        expectComponentToHaveProps(wrapper, {
          className: 'no-underline',
          link: true,
          href: primaryCTA.href,
        });
      });

      describe('the Lodgify UI `Button`', () => {
        it('should render a Lodgify UI `Button` component', () => {
          const wrapper = getChildOfFragment(2, {
            primaryCTA,
          });
          expectComponentToHaveChildren(wrapper, Button);
        });

        it('should have the right children', () => {
          const wrapper = getChildOfFragment(2, {
            primaryCTA,
          }).find(Button);
          expectComponentToHaveChildren(wrapper, primaryCTA.text);
        });
      });
    });
  });
});
