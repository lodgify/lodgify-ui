import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';

import { Component as Submenu } from './component';

const children = 'Click me';
const items = [{ text: 'someText', href: 'someHref' }];

describe('<Submenu />', () => {
  it('should render a single Semantic UI `Dropdown` component', () => {
    const wrapper = shallow(<Submenu items={items}>{children}</Submenu>);
    expectComponentToBe(wrapper, Dropdown);
  });

  describe('the `Dropdown` component', () => {
    it('should get the right props by default', () => {
      const submenu = shallow(<Submenu items={items}>{children}</Submenu>);
      const actual = submenu.find('Dropdown').props();
      expect(actual).toEqual(
        expect.objectContaining({
          defaultValue: null,
          icon: <Icon name="caret down" size="small" />,
          item: false,
          name: null,
          onChange: expect.any(Function),
          simple: false,
          className: '',
          options: expect.arrayContaining([expect.any(Object)]),
          pointing: 'top',
          trigger: children,
          upward: false,
        })
      );
    });

    it('should get `props.className` `underlined` if required', () => {
      const submenu = shallow(
        <Submenu isTriggerUnderlined items={items}>
          {children}
        </Submenu>
      );
      const actual = submenu.find('Dropdown').prop('className');
      expect(actual).toBe('underlined');
    });

    it('should get `props.item` `true` if required', () => {
      const submenu = shallow(
        <Submenu isMenuItem items={items}>
          {children}
        </Submenu>
      );
      const actual = submenu.find('Dropdown').prop('item');
      expect(actual).toBe(true);
    });

    it('should get `props.simple` `true` if required', () => {
      const submenu = shallow(
        <Submenu isTriggeredOnHover items={items}>
          {children}
        </Submenu>
      );
      const actual = submenu.find('Dropdown').prop('simple');
      expect(actual).toBe(true);
    });
  });

  it('should have displayName `Submenu`', () => {
    expectComponentToHaveDisplayName(Submenu, 'Submenu');
  });
});
