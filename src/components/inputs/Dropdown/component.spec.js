jest.mock('utils/get-is-input-value-reset');
jest.mock('utils/get-controlled-input-value');
jest.mock('./utils/getIsOpenAfterChange');
jest.mock('./utils/isValueValid');
jest.mock('./utils/getIcon');

import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown as SemanticDropdown } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getIsInputValueReset } from 'utils/get-is-input-value-reset';
import { Icon } from 'elements/Icon';
import { getControlledInputValue } from 'utils/get-controlled-input-value';

import { ErrorMessage } from '../ErrorMessage';
import { ICON_NAMES } from '../../elements/Icon/constants';

import { isValueValid } from './utils/isValueValid';
import { getIsOpenAfterChange } from './utils/getIsOpenAfterChange';
import { Component as Dropdown } from './component';
import { getIcon } from './utils/getIcon';

const OPTIONS = [{ text: 'someText', value: 'someValue' }];
const OPTIONS_WITH_IMAGES = [
  { text: 'someText', value: 'someValue', imageUrl: 'someImage' },
];

const getDropdown = extraProps => shallow(<Dropdown {...extraProps} />);
const getDropdownContainer = extraProps =>
  getDropdown(extraProps).find('div.dropdown-container');

const IS_OPEN = false;
const CONTROLLED_VALUE = '🐑';

getIsOpenAfterChange.mockReturnValue(IS_OPEN);
getIcon.mockReturnValue(ICON_NAMES.CARET_DOWN);
getControlledInputValue.mockReturnValue(CONTROLLED_VALUE);

describe('<Dropdown />', () => {
  it('should render a single `div` with class `.dropdown-container`', () => {
    const wrapper = getDropdown();

    expectComponentToBe(wrapper, 'div.dropdown-container');
  });

  describe('if `props.isCompact` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getDropdown({ isCompact: true });

      expect(wrapper).toMatchSnapshot();
    });
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

    describe('if `isClearable` prop is false', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          isClearable: false,
        });

        expectComponentToHaveProps(wrapper, { clearable: false });
      });
    });

    describe('if `willOpenAbove` prop is passed', () => {
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

  describe('`componentDidUpdate`', () => {
    it('should call `getIsInputValueReset` with the right arguments', () => {
      const PROPS_VALUE = '🌴';
      const PREVIOUS_PROPS_VALUE = '🌲';
      const wrapper = getDropdown({ value: PROPS_VALUE });

      wrapper
        .instance()
        .componentDidUpdate({ value: PREVIOUS_PROPS_VALUE }, {});

      expect(getIsInputValueReset).toHaveBeenCalledWith(
        PREVIOUS_PROPS_VALUE,
        PROPS_VALUE
      );
    });

    describe('if `getIsInputValueReset` returns `true`', () => {
      it('should call `setState` with the right arguments', () => {
        const wrapper = getDropdown();

        getIsInputValueReset.mockReturnValueOnce(true);

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidUpdate({}, {});

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          value: undefined,
        });
      });
    });

    describe('if `previousProps.value` !== `this.props.value`', () => {
      const PROPS_VALUE = '🌴';
      const PROPS_INITIAL_VALUE = '🌲';
      const PREVIOUS_PROPS_VALUE = '🎄';
      const STATE_VALUE = '🌳';

      it('should call `getControlledInputValue` with the correct arguments', () => {
        const wrapper = getDropdown({
          value: PROPS_VALUE,
          initialValue: PROPS_INITIAL_VALUE,
        });

        wrapper.instance().state = {
          value: STATE_VALUE,
        };
        wrapper
          .instance()
          .componentDidUpdate({ value: PREVIOUS_PROPS_VALUE }, {});

        expect(getControlledInputValue).toHaveBeenCalledWith(
          PROPS_VALUE,
          PROPS_INITIAL_VALUE,
          STATE_VALUE
        );
      });

      it('should call `some` with the correct arguments', () => {
        const PROPS_VALUE = '🌴';

        const wrapper = getDropdown({
          value: PROPS_VALUE,
        });

        wrapper
          .instance()
          .componentDidUpdate({ value: PREVIOUS_PROPS_VALUE }, {});

        expect(isValueValid).toHaveBeenCalledWith(CONTROLLED_VALUE);
      });

      it('should call `this.setState` with the correct arguments', () => {
        const PROPS_VALUE = '🌴';
        const wrapper = getDropdown({ value: PROPS_VALUE });

        isValueValid.mockReturnValueOnce(false);
        wrapper.instance().setState = jest.fn();
        wrapper
          .instance()
          .componentDidUpdate({ value: PREVIOUS_PROPS_VALUE }, {});

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          value: CONTROLLED_VALUE,
        });
      });
    });

    describe('if `state.value` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const value = '🆎';
        const name = 'naaaame';
        const onChange = jest.fn();
        const wrapper = getDropdown({ name, onChange });

        wrapper.setState({ value });
        wrapper.instance().componentDidUpdate({}, {});

        expect(onChange).toHaveBeenCalledWith(name, value);
      });
    });

    describe('if `previousState.Blurred` is false and `state.isBlurred` is true', () => {
      it('should call `props.onBlur`', () => {
        const name = 'naaaame';
        const onBlur = jest.fn();
        const wrapper = getDropdown({ name, onBlur });

        wrapper.setState({ isBlurred: true });
        wrapper.instance().componentDidUpdate({}, { isBlurred: false });

        expect(onBlur).toHaveBeenCalledWith(name);
      });
    });

    describe('if `previousState.Blurred` is true and `state.isBlurred` is false', () => {
      it('should call `props.onFocus`', () => {
        const name = 'naaaame';
        const onFocus = jest.fn();
        const wrapper = getDropdown({ name, onFocus });

        wrapper.setState({ isBlurred: false });
        wrapper.instance().componentDidUpdate({}, { isBlurred: true });

        expect(onFocus).toHaveBeenCalledWith(name);
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
        isBlurred: true,
        isOpen: false,
        value: CONTROLLED_VALUE,
      });
    });
  });

  describe('Interaction: onChange', () => {
    it('should call `getIsOpenAfterChange` with the right arguments', () => {
      const key = '🔑';
      const wrapper = getDropdown();

      wrapper.instance().handleChange({ key }, {});

      expect(getIsOpenAfterChange).toHaveBeenCalledWith(key);
    });

    it('should persist the value in component state and set `state.isOpen` to whatever `getIsOpenAfterChange` returns', () => {
      const data = { value: '🐯' };
      const wrapper = getDropdown();

      wrapper.setState({ isOpen: true });
      const input = wrapper.find(SemanticDropdown);

      input.simulate('change', {}, data);
      const actual = wrapper.state();

      expect(actual).toEqual({
        isBlurred: true,
        isOpen: IS_OPEN,
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
        isBlurred: false,
        value: CONTROLLED_VALUE,
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
        isBlurred: false,
        value: CONTROLLED_VALUE,
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

  describe('`render`', () => {
    it('should call `getControlledInputValue` with the right arguments', () => {
      const PROPS_VALUE = '🎅';
      const STATE_VALUE = '😎';
      const wrapper = getDropdown({ value: PROPS_VALUE });

      wrapper.setState({ value: STATE_VALUE });
      wrapper.instance().render();

      expect(getControlledInputValue).toHaveBeenCalledWith(
        PROPS_VALUE,
        undefined,
        STATE_VALUE
      );
    });

    it('should call getIcon with the correct values', () => {
      const value = '🐑';

      getDropdown();
      expect(getIcon).toHaveBeenCalledWith(value, true);
    });
  });

  it('should have displayName `Dropdown`', () => {
    expectComponentToHaveDisplayName(Dropdown, 'Dropdown');
  });
});
