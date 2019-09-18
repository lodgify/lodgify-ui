import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Submenu } from './component';

const children = 'Click me';
const items = [{ text: 'someText', href: 'someHref' }];

describe('<Submenu />', () => {
  it('should render a single Semantic UI `Dropdown` component', () => {
    const wrapper = shallow(<Submenu items={items}>{children}</Submenu>);

    expectComponentToBe(wrapper, Dropdown);
  });

  describe('the `Dropdown` component', () => {
    const getSubmenuDropdown = props =>
      shallow(
        <Submenu {...props} items={items}>
          {children}
        </Submenu>
      ).find('Dropdown');

    it('should get `props.className` `underlined` if required', () => {
      const wrapper = getSubmenuDropdown({ isTriggerUnderlined: true });

      expectComponentToHaveProps(wrapper, {
        className: 'underlined',
      });
    });

    it('should get `props.item` `true` if required', () => {
      const wrapper = getSubmenuDropdown({ isMenuItem: true });

      expectComponentToHaveProps(wrapper, {
        item: true,
      });
    });

    it('should get `props.simple` `true` if required', () => {
      const wrapper = getSubmenuDropdown({ isTriggeredOnHover: true });

      expectComponentToHaveProps(wrapper, {
        simple: true,
      });
    });
  });

  it('should have displayName `Submenu`', () => {
    expectComponentToHaveDisplayName(Submenu, 'Submenu');
  });
});
