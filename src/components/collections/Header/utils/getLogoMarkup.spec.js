import { shallow } from 'enzyme';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Heading } from 'typography/Heading';

import { getLogoMarkup } from './getLogoMarkup';

const logoText = 'someLogoText';

const getLogoMarkupAsComponent = logoSrc =>
  shallow(getLogoMarkup(logoSrc, logoText));

describe('getLogoMarkup', () => {
  it('should return a Semantic UI `Menu.Item` link component', () => {
    const wrapper = getLogoMarkupAsComponent();

    expectComponentToBe(wrapper, 'a');
  });

  describe('the `Menu.Item` component', () => {
    const getMenuItem = logoSrc => getLogoMarkupAsComponent(logoSrc).find('a');

    it('should have the right props', () => {
      const wrapper = getMenuItem();

      expectComponentToHaveProps(wrapper, { href: '/' });
    });

    it('should render a single child', () => {
      const wrapper = getMenuItem();

      expectComponentToHaveChildren(wrapper, Heading);
    });

    describe('the Heading component', () => {
      it('should have the right props', () => {
        const wrapper = getMenuItem().find(Heading);

        expectComponentToHaveProps(wrapper, {
          children: logoText,
          size: 'small',
        });
      });
    });

    describe('if `props.logoSrc` is passed', () => {
      const logoSrc = '📀';

      it('should render the right children', () => {
        const wrapper = getMenuItem(logoSrc);

        expectComponentToHaveChildren(wrapper, Image);
      });

      describe('the `Image`', () => {
        it('should have the right props', () => {
          const wrapper = getMenuItem(logoSrc).find(Image);

          expectComponentToHaveProps(wrapper, {
            alt: logoText,
            src: logoSrc,
          });
        });
      });
    });
  });
});
