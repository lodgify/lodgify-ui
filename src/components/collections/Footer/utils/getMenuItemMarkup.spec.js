import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getMenuItemMarkup } from './getMenuItemMarkup';

const menuItem = { href: 'someHref', text: 'someText', target: '🎯' };

const getMenuItem = () => shallow(getMenuItemMarkup(menuItem, 0));

describe('getMenuItemMarkup', () => {
  it('should return a Semantic UI `Menu.Item`', () => {
    const wrapper = getMenuItem();

    expectComponentToBe(wrapper, 'a.item');
  });

  describe('the `Menu.Item`', () => {
    it('should render the right children', () => {
      const wrapper = getMenuItem();

      expectComponentToHaveChildren(wrapper, menuItem.text);
    });

    it('should have the right props', () => {
      const wrapper = getMenuItem();

      expectComponentToHaveProps(wrapper, {
        href: menuItem.href,
        className: 'link item',
        target: '🎯',
      });
    });
  });
});
