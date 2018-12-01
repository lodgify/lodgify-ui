import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown as SemanticDropdown } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon, ICON_NAMES } from 'elements/Icon';

import { ErrorMessage } from '../ErrorMessage';

import { Component as Dropdown } from './component';

const OPTIONS = [{ text: 'someText', value: 'someValue' }];
const OPTIONS_WITH_IMAGES = [
  { text: 'someText', value: 'someValue', imageUrl: 'someImage' },
];

const getDropdown = extraProps => shallow(<Dropdown {...extraProps} />);
const getDropdownContainer = extraProps =>
  getDropdown(extraProps).find('div.dropdown-container');

describe('<Dropdown />', () => {
  it('should render a single `div` with class `.dropdown-container`', () => {
    const wrapper = getDropdown();

    expectComponentToBe(wrapper, 'div.dropdown-container');
  });

  describe('the validation states', () => {
    describe('error state', () => {
      it('should render ErrorMessage if message defined', () => {
        const props = {
          error: 'Hello world',
        };
        const wrapper = getDropdown(props);

        expectComponentToHaveChildren(wrapper, ErrorMessage, SemanticDropdown);
      });

      it('should render ErrorMessage with the correct message', () => {
        const props = {
          error: 'Hello world',
        };
        const wrapper = getDropdown(props).find(ErrorMessage);

        expectComponentToHaveProps(wrapper, {
          errorMessage: 'Hello world',
        });
      });

      it('should have the error class', () => {
        const props = {
          error: true,
        };
        const actual = getDropdown(props).hasClass('error');

        expect(actual).toBe(true);
      });
    });

    describe('valid state', () => {
      it('should render the valid Icon', () => {
        const props = {
          isValid: true,
        };
        const wrapper = getDropdown(props);

        expectComponentToHaveChildren(wrapper, Icon, SemanticDropdown);
      });

      it('should render the valid Icon with the color green', () => {
        const props = {
          isValid: true,
        };
        const wrapper = getDropdown(props).find(Icon);

        expectComponentToHaveProps(wrapper, {
          color: 'green',
        });
      });

      it('should have the valid class', () => {
        const props = {
          isValid: true,
        };
        const actual = getDropdown(props).hasClass('valid');

        expect(actual).toBe(true);
      });
    });
  });

  describe('the `div.dropdown-container`', () => {
    const getSemanticDropdown = extraProps =>
      getDropdown(extraProps).find(SemanticDropdown);

    it('should render a single Semantic UI `Dropdown` component', () => {
      const wrapper = getDropdownContainer();

      expectComponentToHaveChildren(wrapper, SemanticDropdown);
    });

    it('should pass the right props to `Dropdown`', () => {
      const wrapper = getSemanticDropdown();

      expectComponentToHaveProps(wrapper, {
        defaultValue: null,
        icon: <Icon name={ICON_NAMES.CARET_DOWN} />,
        onBlur: expect.any(Function),
        onChange: expect.any(Function),
        onClick: expect.any(Function),
        open: false,
        options: expect.any(Array),
        selection: true,
      });
    });

    describe('if `options` prop is passed and has a length', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          options: OPTIONS,
        });

        expectComponentToHaveProps(wrapper, {
          disabled: false,
        });
      });
    });

    describe('if `options` and `isDisabled` props are passed', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          isDisabled: true,
          options: OPTIONS,
        });

        expectComponentToHaveProps(wrapper, { disabled: true });
      });
    });

    describe('if `isDisabled` prop is passed', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          isDisabled: true,
        });

        expectComponentToHaveProps(wrapper, { disabled: true });
      });
    });

    describe('if `isDisabled` prop is passed', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          willOpenAbove: true,
        });

        expectComponentToHaveProps(wrapper, { upward: true });
      });
    });
  });

  describe('if any option does not specify an image', () => {
    describe('`Icon`', () => {
      const getDropdownWithIcon = () =>
        getDropdownContainer({ icon: 'search' });

      it('should render if `props.icon` is passed', () => {
        const wrapper = getDropdownWithIcon();

        expectComponentToHaveChildren(wrapper, Icon, SemanticDropdown);
      });

      it('should have the right props', () => {
        const wrapper = getDropdownWithIcon().find(Icon);

        expectComponentToHaveProps(wrapper, {
          name: 'search',
        });
      });
    });

    describe('`label`', () => {
      const getDropdownLabel = () => getDropdownContainer({ label: '🏷' });

      it('should render if `props.label` is passed', () => {
        const wrapper = getDropdownLabel();

        expectComponentToHaveChildren(wrapper, SemanticDropdown, 'label');
      });

      it('should have the right props', () => {
        const wrapper = getDropdownLabel().find('label');

        expectComponentToHaveProps(wrapper, { onClick: expect.any(Function) });
      });
    });
  });

  describe('if any of the options specify an image', () => {
    const getDropdownWithImageOptions = (extraProps = {}) =>
      getDropdownContainer({ options: OPTIONS_WITH_IMAGES, ...extraProps });

    it('should add the correct class to the wrapper', () => {
      const wrapper = getDropdownWithImageOptions();
      const actual = wrapper.hasClass('has-images');

      expect(actual).toBe(true);
    });

    describe('`Icon`', () => {
      it('should not render', () => {
        const wrapper = getDropdownWithImageOptions({ icon: 'search' });

        expectComponentToHaveChildren(wrapper, SemanticDropdown);
      });
    });

    describe('`label`', () => {
      it('should not render', () => {
        const wrapper = getDropdownWithImageOptions({ label: '🏷' });

        expectComponentToHaveChildren(wrapper, SemanticDropdown);
      });
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

    it('should apply the `dirty` class if the value is 0', () => {
      const data = { value: 0 };
      const wrapper = getDropdown();

      const input = wrapper.find(SemanticDropdown);

      input.simulate('change', undefined, data);

      const actual = wrapper.hasClass('dirty');

      expect(actual).toBe(true);
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
        <Dropdown name={name} onChange={handleChange} options={OPTIONS} />
      );

      dropdown.setState({ value });
      expect(handleChange).toHaveBeenCalledWith(name, value);
    });
  });

  it('should have displayName `Dropdown`', () => {
    expectComponentToHaveDisplayName(Dropdown, 'Dropdown');
  });
});
