import React from 'react';
import { mount } from 'enzyme';
import { Popup } from 'semantic-ui-react';

import { Component as CounterDropdown } from './component';

const props = {
  counterLabel: 'counterLabel',
  dropdownLabel: 'dropdownLabel',
};

const getShallowCounterDropdown = extra =>
  mount(<CounterDropdown {...props} {...extra} />);

describe('CounterDropdown', () => {
  it('should render the right structure', () => {
    const wrapper = getShallowCounterDropdown();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.willOpenAbove` is true', () => {
    it('should render the right structure', () => {
      const wrapper = getShallowCounterDropdown({ willOpenAbove: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interaction: first click', () => {
    it('should set the `Popup.props.open` to true', () => {
      const wrapper = getShallowCounterDropdown();
      const trigger = wrapper.find('.dropdown-container');

      trigger.simulate('click');
      const popupIsOpen = wrapper.find(Popup).props().open;

      expect(popupIsOpen).toBe(true);
    });
  });

  describe('Interaction: second click', () => {
    it('should set the `Popup.props.open` to false', () => {
      const wrapper = getShallowCounterDropdown();
      const trigger = wrapper.find('.dropdown-container');

      trigger.simulate('click');
      trigger.simulate('click');
      const popupIsOpen = wrapper.find(Popup).props().open;

      expect(popupIsOpen).toBe(false);
    });
  });
});
