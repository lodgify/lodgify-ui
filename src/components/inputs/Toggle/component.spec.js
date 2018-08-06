import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Checkbox } from '../Checkbox/component';

import { Component as Toggle } from './component';

describe('<Toggle />', () => {
  it('should render a single UI Checkbox component', () => {
    const wrapper = shallow(<Toggle />);

    expectComponentToBe(wrapper, Checkbox);
  });

  it('should pass the right props to child component', () => {
    const LABEL_TEXT = 'This is a toggle';
    const PROPS = {
      isDisabled: true,
      isChecked: true,
      label: LABEL_TEXT,
    };
    const component = shallow(<Toggle {...PROPS} label={LABEL_TEXT} />);
    const checkbox = component.find(Checkbox);

    expect(checkbox.props()).toEqual(
      expect.objectContaining({
        isToggle: true,
        ...PROPS,
      })
    );
  });

  it('should have displayName "Toggle"', () => {
    expectComponentToHaveDisplayName(Toggle, 'Toggle');
  });
});
