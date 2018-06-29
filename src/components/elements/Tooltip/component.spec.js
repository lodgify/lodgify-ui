import React from 'react';
import { shallow } from 'enzyme';
import { Popup } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';

import { Component as Tooltip } from './component';

const content = 'Extra berenjena';

describe('<Tooltip />', () => {
  it('should render a single Semantic UI `Popup` component', () => {
    const wrapper = shallow(<Tooltip content={content} />);
    expectComponentToBe(wrapper, Popup);
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
    expectComponentToHaveDisplayName(Tooltip, 'Tooltip');
  });
});
