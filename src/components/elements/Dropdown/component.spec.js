import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown as SemanticDropdown, Icon } from 'semantic-ui-react';

import { Component as Dropdown } from './component';

const OPTIONS = [{ text: 'someText', value: 'someValue' }];
const OPTIONS_WITH_IMAGES = [
  { text: 'someText', value: 'someValue', image: 'someImage' },
];

const getDropdown = extraProps =>
  shallow(<Dropdown options={OPTIONS} {...extraProps} />);
const getDropdownContainer = extraProps =>
  getDropdown(extraProps).find('div.dropdown-container');

describe('<Dropdown />', () => {
  it('should render a single `div` with class `.dropdown-container`', () => {
    const wrapper = getDropdown();
    const actual = wrapper.find('div.dropdown-container');
    expect(actual).toHaveLength(1);
  });

  describe('the `div.dropdown-container`', () => {
    it('should not render an `Icon`', () => {
      const wrapper = getDropdownContainer();
      const actual = wrapper.children(Icon);
      expect(actual).toHaveLength(0);
    });

    it('should render a single Semantic UI `Dropdown` component', () => {
      const wrapper = getDropdownContainer();
      const actual = wrapper.children(SemanticDropdown);
      expect(actual).toHaveLength(1);
    });

    it('should pass the right props to `Dropdown`', () => {
      const wrapper = getDropdownContainer();
      const actual = wrapper.children(SemanticDropdown).props();
      expect(actual).toEqual(
        expect.objectContaining({
          defaultValue: null,
          onBlur: expect.any(Function),
          onChange: expect.any(Function),
          onClick: expect.any(Function),
          open: false,
          options: expect.arrayContaining([expect.any(Object)]),
          selection: true,
        })
      );
    });

    it('should not render a `label` as a child', () => {
      const wrapper = getDropdown();
      const actual = wrapper.children('label');
      expect(actual).toHaveLength(0);
    });
  });

  describe('if none of the options specifies an image', () => {
    it('should render the specified `Icon`', () => {
      const icon = 'world';
      const wrapper = getDropdownContainer({ icon });
      const actual = wrapper.children(Icon).prop('name');
      expect(actual).toBe(icon);
    });

    it('should render the specified `label`', () => {
      const label = 'whoop';
      const wrapper = getDropdownContainer({ label });
      const actual = wrapper.children('label');
      expect(actual).toHaveLength(1);
    });

    describe('the `label`', () => {
      it('should have the right props', () => {
        const label = 'whoop';
        const wrapper = getDropdownContainer({ label });
        const actual = wrapper.children('label').props();
        expect(actual).toEqual(
          expect.objectContaining({
            children: label,
            onClick: expect.any(Function),
          })
        );
      });
    });
  });

  describe('if some of the options specify an image', () => {
    it('should add the correct class to the wrapper', () => {
      const wrapper = getDropdownContainer({ options: OPTIONS_WITH_IMAGES });
      const actual = wrapper.hasClass('has-images');
      expect(actual).toBe(true);
    });

    it('should not render the `Icon`, even if specified', () => {
      const icon = 'world';
      const wrapper = getDropdownContainer({
        icon,
        options: OPTIONS_WITH_IMAGES,
      });
      const actual = wrapper.children(Icon);
      expect(actual).toHaveLength(0);
    });

    it('should render the `label`, even if specified', () => {
      const label = 'whoop';
      const wrapper = getDropdownContainer({
        options: OPTIONS_WITH_IMAGES,
        label,
      });
      const actual = wrapper.children('label');
      expect(actual).toHaveLength(0);
    });
  });

  describe('Interaction: onBlur', () => {
    it('should set `state.isOpen` to false', () => {
      const wrapper = getDropdown();
      wrapper.setState({ isOpen: true });
      const input = wrapper.find(SemanticDropdown);
      input.simulate('blur');
      const actual = wrapper.state();
      expect(actual).toEqual({
        isOpen: false,
        value: '',
      });
    });
  });

  describe('Interaction: onChange', () => {
    it('should persist the value in component state and set `state.isOpen` to false', () => {
      const data = { value: '🐯' };
      const wrapper = getDropdown();
      wrapper.setState({ isOpen: true });
      const input = wrapper.find(SemanticDropdown);
      input.simulate('change', undefined, data);
      const actual = wrapper.state();
      expect(actual).toEqual({
        isOpen: false,
        value: data.value,
      });
    });
  });

  describe('Interaction: onClick the dropdown input', () => {
    it('should toggle `state.isOpen`', () => {
      const wrapper = getDropdown();
      const input = wrapper.find(SemanticDropdown);
      input.simulate('click');
      const actual = wrapper.state();
      expect(actual).toEqual({
        isOpen: true,
        value: '',
      });
    });
  });

  describe('Interaction: onClick the dynamic label', () => {
    it('should set `state.isOpen` to true', () => {
      const wrapper = getDropdown({ label: 'click me' });
      const input = wrapper.find('label');
      input.simulate('click');
      const actual = wrapper.state();
      expect(actual).toEqual({
        isOpen: true,
        value: '',
      });
    });
  });

  describe('State change: value', () => {
    it('should call the function passed as `props.onChange`', () => {
      const name = 'someName';
      const value = 'someValue';
      const handleChange = jest.fn();
      const dropdown = shallow(
        <Dropdown name={name} options={OPTIONS} onChange={handleChange} />
      );
      dropdown.setState({ value });
      expect(handleChange).toHaveBeenCalledWith(name, value);
    });
  });

  it('should have displayName `Dropdown`', () => {
    const actual = Dropdown.displayName;
    expect(actual).toBe('Dropdown');
  });
});
