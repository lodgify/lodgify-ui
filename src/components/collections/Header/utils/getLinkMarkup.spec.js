import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getLinkMarkup } from './getLinkMarkup';

const text = 'someText';
const href = 'someHref';
const index = 0;

const getLinkMarkupAsComponent = activeNavigationItemIndex =>
  shallow(getLinkMarkup(text, href, index, activeNavigationItemIndex));

describe('getLinkMarkup', () => {
  it('should return a Semantic UI `Menu.Item` link component', () => {
    const wrapper = getLinkMarkupAsComponent();

    expectComponentToBe(wrapper, 'a');
  });

  describe('the `Menu.Item` component', () => {
    const getMenuItem = activeNavigationItemIndex =>
      getLinkMarkupAsComponent(activeNavigationItemIndex).find('a');

    it('should have the right props', () => {
      const wrapper = getMenuItem();

      expectComponentToHaveProps(wrapper, { href });
    });

    it('should have the right children', () => {
      const wrapper = getMenuItem();

      expectComponentToHaveChildren(wrapper, text);
    });

    describe('if `props.index` and `props.activeNavigationItemIndex` are equal', () => {
      it('should get the right props', () => {
        const wrapper = getMenuItem(0);

        expectComponentToHaveProps(wrapper, {
          href,
          className: expect.stringContaining('active'),
        });
      });
    });
  });
});
