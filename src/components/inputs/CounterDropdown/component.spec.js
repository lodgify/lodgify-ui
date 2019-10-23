import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from 'semantic-ui-react';

import { Component as CounterDropdown } from './component';

const props = {
  counterLabel: 'counterLabel',
  dropdownLabel: 'dropdownLabel',
};

const getShallowCounterDropdown = extra =>
  shallow(<CounterDropdown {...props} {...extra} />);

describe('CounterDropdown', () => {
  it('should render the right structure', () => {
    const wrapper = getShallowCounterDropdown();

    expect(wrapper).toMatchSnapshot();
  });

  describe('interaction: onBlur', () => {
    it('should render the right structure', () => {
      const wrapper = getShallowCounterDropdown();
      const input = wrapper
        .find(Dropdown)
        .first()
        .simulate('blur');

      expect(input).toMatchSnapshot();
    });
  });

  describe('interaction: onFocus', () => {
    it('should render the right structure', () => {
      const wrapper = getShallowCounterDropdown();
      const input = wrapper
        .find(Dropdown)
        .first()
        .simulate('focus');

      expect(input).toMatchSnapshot();
    });
  });
});
