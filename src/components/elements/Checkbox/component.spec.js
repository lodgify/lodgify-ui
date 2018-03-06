import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react';

import { Component as Checkbox } from './component';

describe('<Checkbox />', () => {
  it('should have displayName "Checkbox"', () => {
    const displayName = Checkbox.displayName;
    expect(displayName).toBe('Checkbox');
  });

  it('should render a single Semantic UI Checkbox component', () => {
    const component = shallow(<Checkbox />);
    const checkbox = component.find(SemanticCheckbox);
    expect(checkbox).toHaveLength(1);
  });

  it('should pass the right props to child component', () => {
    const LABEL_TEXT = 'Hulk Hogan loves testing';
    const component = shallow(
      <Checkbox isDisabled isChecked label={LABEL_TEXT} />
    );
    const checkbox = component.find(SemanticCheckbox);
    expect(checkbox.props()).toEqual(
      expect.objectContaining({
        disabled: true,
        checked: true,
        label: LABEL_TEXT,
      })
    );
    expect(checkbox.prop('isChecked')).not.toBeDefined();
    expect(checkbox.prop('isDisabled')).not.toBeDefined();
    expect(checkbox.prop('isCheckedByDefault')).not.toBeDefined();
  });

  describe('Interaction: onChange', () => {
    it('should call `props.onChange` with the right arguments', () => {
      const name = 'someName';
      const handleChange = jest.fn();
      const checkbox = shallow(
        <Checkbox name={name} onChange={handleChange} />
      );
      checkbox.simulate('change', undefined, { checked: true });
      expect(handleChange).toHaveBeenCalledWith(name, true);
    });
  });
});
