import React from 'react';
import { shallow } from 'enzyme';

import { Component as Submenu } from './component';

const children = 'Click me';
const items = [{ text: 'someText', href: 'someHref' }];

describe('<Submenu />', () => {
  it('should render a single Semantic UI `Dropdown` component', () => {
    const submenu = shallow(<Submenu items={items}>{children}</Submenu>);
    const actual = submenu.find('Dropdown');
    expect(actual).toHaveLength(1);
  });

  it('should pass the right props to the Semantic UI `Dropdown` component', () => {
    const submenu = shallow(<Submenu items={items}>{children}</Submenu>);
    const actual = submenu.find('Dropdown').props();
    expect(actual).toEqual(
      expect.objectContaining({
        options: items,
        pointing: 'top',
        trigger: children,
      })
    );
  });

  it('should have displayName `Submenu`', () => {
    const actual = Submenu.displayName;
    expect(actual).toBe('Submenu');
  });
});
