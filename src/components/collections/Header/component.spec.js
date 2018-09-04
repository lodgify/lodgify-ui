import React from 'react';
import { shallow } from 'enzyme';
import { Menu, Responsive } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Container } from 'layout/Container';

import { ComponentWithResponsive as Header } from './component';
import { navigationItems } from './mock-data/navigationItems';

const logoText = 'someLogoText';

const props = {
  logoText,
  navigationItems,
};

const getHeader = () => shallow(<Header {...props} />);

const getWrappedHeader = extraProps => {
  const Child = getHeader().prop('as');

  return shallow(<Child isUserOnMobile={false} {...props} {...extraProps} />);
};

describe('<Header />', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getHeader();

    expectComponentToBe(wrapper, Responsive);
  });

  describe('the wrapped `Header` component', () => {
    it('should be a single header', () => {
      const wrapper = getWrappedHeader();

      expectComponentToBe(wrapper, 'header');
    });

    it('should have the right children', () => {
      const wrapper = getWrappedHeader();

      expectComponentToHaveChildren(wrapper, Container);
    });
  });

  describe('the `Container` component', () => {
    const getFirstContainer = () => getWrappedHeader().find(Container);

    it('should have the right props', () => {
      const wrapper = getFirstContainer();

      expectComponentToHaveProps(wrapper, {
        borderless: true,
        as: Menu,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstContainer();

      expectComponentToHaveChildren(wrapper, Menu.Item, Menu.Menu);
    });
  });

  describe('the Semantic UI `Menu.Menu` component', () => {
    it('should have prop `position` set as `right`', () => {
      const wrapper = getWrappedHeader({
        logoText,
        navigationItems,
      })
        .find(Container)
        .children(Menu.Menu);

      expectComponentToHaveProps(wrapper, { position: 'right' });
    });

    describe('if `props.isUserOnMobile` is true', () => {
      it('should call `getMobileMenuMarkup`', () => {
        const wrapper = getWrappedHeader({
          isUserOnMobile: true,
        });
        const actual = wrapper.find('Modal');

        expect(actual).toHaveLength(1);
      });
    });

    describe('if `props.isUserOnMobile` is false', () => {
      it('should call `getMobileMenuMarkup`', () => {
        const wrapper = getWrappedHeader({
          isUserOnMobile: false,
        });
        const actual = wrapper.find('Modal');

        expect(actual).toHaveLength(0);
      });
    });
  });

  it('should have `displayName` Header', () => {
    const component = getHeader().prop('as');

    expectComponentToHaveDisplayName(component, 'Header');
  });
});
