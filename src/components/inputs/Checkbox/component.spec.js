import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Checkbox } from './component';

const getCheckbox = () => shallow(<Checkbox />);

describe('<Checkbox />', () => {
  it('should render a single Semantic UI Checkbox component', () => {
    const wrapper = getCheckbox();
    expectComponentToBe(wrapper, SemanticCheckbox);
  });

  describe('`SemanticCheckbox`', () => {
    it('should have the right props', () => {
      const wrapper = getCheckbox().find(SemanticCheckbox);
      expectComponentToHaveProps(wrapper, {
        checked: undefined,
        defaultChecked: undefined,
        disabled: false,
        label: '',
        name: '',
        onChange: expect.any(Function),
        radio: false,
        toggle: false,
      });
    });
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

  it('should have displayName "Checkbox"', () => {
    expectComponentToHaveDisplayName(Checkbox, 'Checkbox');
  });
});
