import React from 'react';
import { shallow } from 'enzyme';

import { Icon } from 'elements/Icon';

import { Component as Tooltip } from './component';

const content = 'Extra berenjena';

describe('<Tooltip />', () => {
  it('should render a single Semantic UI `Popup` component', () => {
    const tooltip = shallow(<Tooltip content={content} />);
    const actual = tooltip.find('Popup').length;
    expect(actual).toBe(1);
  });

  it('should pass the `Popup` component the right props', () => {
    const tooltip = shallow(<Tooltip content={content} />);
    const actual = tooltip.find('Popup').props();
    expect(actual).toEqual(
      expect.objectContaining({
        color: 'grey',
        content,
        inverted: true,
        position: 'top center',
        size: 'small',
        trigger: (
          <Icon
            color="grey"
            isCircular
            isColorInverted
            name="info"
            size="small"
          />
        ),
      })
    );
  });

  it('should have `displayName` Tooltip', () => {
    const actual = Tooltip.displayName;
    expect(actual).toBe('Tooltip');
  });
});
