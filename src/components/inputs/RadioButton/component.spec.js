import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Checkbox } from '../Checkbox/component';

import { Component as RadioButton } from './component';

describe('<RadioButton />', () => {
  it('should render a single UI Checkbox component', () => {
    const component = shallow(<RadioButton />);
    // Reminder: <RadioButton/> is based on <Checkbox>
    const checkbox = component.find(Checkbox);
    expect(checkbox).toHaveLength(1);
  });

  it('should pass the right props to child component', () => {
    const LABEL_TEXT = 'This is a radio button';
    const PROPS = {
      isDisabled: true,
      isChecked: true,
      isCheckedByDefault: true,
      label: LABEL_TEXT,
    };
    const component = shallow(<RadioButton {...PROPS} label={LABEL_TEXT} />);
    const checkbox = component.find(Checkbox);
    expect(checkbox.props()).toEqual(
      expect.objectContaining({
        isRadioButton: true,
        ...PROPS,
      })
    );
  });

  it('should have displayName `RadioButton`', () => {
    expectComponentToHaveDisplayName(RadioButton, 'RadioButton');
  });
});
