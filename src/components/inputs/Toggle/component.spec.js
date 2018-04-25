import React from 'react';
import { shallow } from 'enzyme';

import { Component as Checkbox } from '../Checkbox/component';

import { Component as Toggle } from './component';

describe('<Toggle />', () => {
  it('should have displayName "Toggle"', () => {
    const displayName = Toggle.displayName;
    expect(displayName).toBe('Toggle');
  });

  it('should render a single UI Checkbox component', () => {
    const component = shallow(<Toggle />);
    // Reminder: <Toggle> is based on <Checkbox>
    const checkboxComponent = component.find(Checkbox);
    expect(checkboxComponent).toHaveLength(1);
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
});
