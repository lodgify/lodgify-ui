jest.mock('utils/get-is-input-value-reset');
jest.mock('utils/get-controlled-input-value');
jest.mock('utils/some');

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Input } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getIsInputValueReset } from 'utils/get-is-input-value-reset';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { getControlledInputValue } from 'utils/get-controlled-input-value';
import { some } from 'utils/some';

import { Component as InputController } from './component';

const props = {
  error: false,
  isValid: false,
  name: 'someName',
  onChange: Function.prototype,
};
const children = <input />;

const CONTROLLED_VALUE = '🐑';

const getInputController = extraProps =>
  shallow(
    <InputController {...props} {...extraProps}>
      {children}
    </InputController>
  );
const getInputControllerInput = () => getInputController().find('Input');

describe('<InputController />', () => {
  describe('default behaviour', () => {
    it('should render a single Semantic UI `Input` component', () => {
      const wrapper = getInputController();

      expectComponentToBe(wrapper, Input);
    });

    it('should default to no classNames on `Input`', () => {
      const wrapper = getInputController();
      const semanticInput = wrapper.find('Input');
      const classNames = ['dirty', 'valid', 'error'];

      classNames.forEach(className => {
        const actual = semanticInput.hasClass(className);

        expect(actual).toBe(false);
      });
    });

    it('should render the children inside `Input`', () => {
      const wrapper = getInputControllerInput();

      expectComponentToHaveChildren(wrapper, 'input');
    });

    describe('the children', () => {
      const getChildInput = props => getInputController(props).find('input');

      it('should get a function as `props.onChange` by default', () => {
        const wrapper = getChildInput();

        expectComponentToHaveProps(wrapper, {
          onChange: expect.any(Function),
        });
      });

      it('should get a function as `props[inputOnChangeFunctionName]` if specified', () => {
        const inputOnChangeFunctionName = 'whoopDeDooo';
        const wrapper = getChildInput({
          inputOnChangeFunctionName,
        });

        expectComponentToHaveProps(wrapper, {
          [inputOnChangeFunctionName]: expect.any(Function),
        });
      });

      it('should call `props.mapValueToProps` with the right arguments', () => {
        const mapValueToProps = jest.fn();
        const VALUE = '💤';

        getControlledInputValue.mockReturnValueOnce(VALUE);
        getChildInput({ mapValueToProps });

        expect(mapValueToProps).toHaveBeenCalledWith(VALUE);
      });

      it('should spread whatever `props.mapValueToProps` returns as props', () => {
        const mapValueToProps = jest.fn();
        const valueOne = '1';
        const valueTwo = '2';
        const MAPPED_VALUES = {
          valueOne,
          valueTwo,
        };

        mapValueToProps.mockReturnValueOnce(MAPPED_VALUES);

        const wrapper = getChildInput({ mapValueToProps });

        expectComponentToHaveProps(wrapper, {
          valueOne,
          valueTwo,
        });
      });
    });

    it('should not render the `ErrorMessage` component', () => {
      const semanticInput = getInputControllerInput();
      const actual = semanticInput.find('ErrorMessage').length;

      expect(actual).toBe(0);
    });

    it('should not render the `Icon` component', () => {
      const semanticInput = getInputControllerInput();
      const actual = semanticInput.find('Icon').length;

      expect(actual).toBe(0);
    });

    it('should not render the `label` element', () => {
      const semanticInput = getInputControllerInput();
      const actual = semanticInput.find('label').length;

      expect(actual).toBe(0);
    });
  });

  describe('State: error', () => {
    it('should add `className` `error` to `Input`', () => {
      const errorValues = [true, "Something's not right"];

      errorValues.forEach(errorValue => {
        const semanticInput = getInputController({ error: errorValue }).find(
          'Input'
        );
        const actual = semanticInput.hasClass('error');

        expect(actual).toBe(true);
      });
    });

    describe('if `props.error` is boolean', () => {
      it('should not render the `ErrorMessage` component', () => {
        const inputController = getInputController({ error: true });
        const actual = inputController.find('ErrorMessage').length;

        expect(actual).toBe(0);
      });
    });

    describe('if `props.error` is a string', () => {
      it('should treat an empty string as false', () => {
        const semanticInput = getInputController({ error: '' }).find('Input');
        const actual = semanticInput.hasClass('error');

        expect(actual).toBe(false);
      });

      it('should render a single `ErrorMessage` component', () => {
        const inputController = getInputController({ error: 'Oops' });
        const actual = inputController.find('ErrorMessage').length;

        expect(actual).toBe(1);
      });

      it('should pass `props.error` to the `ErrorMessage` component', () => {
        const errorMessage = 'Oh nooes';
        const wrapper = getInputController({ error: errorMessage }).find(
          'ErrorMessage'
        );

        expectComponentToHaveProps(wrapper, {
          errorMessage,
        });
      });
    });
  });

  describe('State: valid', () => {
    it('should add `className` `valid` to `Input`', () => {
      const semanticInput = getInputController({ isValid: true }).find('Input');
      const actual = semanticInput.hasClass('valid');

      expect(actual).toBe(true);
    });

    it('should render a single `Icon` component', () => {
      const inputController = getInputController({ isValid: true });
      const actual = inputController.find('Icon').length;

      expect(actual).toBe(1);
    });

    it('should pass the `Icon` component the right props', () => {
      const inputController = getInputController({ isValid: true });
      const actual = inputController.find('Icon').props();

      expect(actual).toEqual(
        expect.objectContaining({
          color: 'green',
          name: 'checkmark',
        })
      );
    });
  });

  describe('State: focused', () => {
    it('should add `className` `focus` to `Input`', () => {
      const semanticInput = getInputController({ isFocused: true }).find(
        'Input'
      );
      const actual = semanticInput.hasClass('focus');

      expect(actual).toBe(true);
    });
  });

  describe('Variation: labelled', () => {
    it('should render a single html `label` inside `Input`', () => {
      const semanticInput = getInputController({ label: 'yo' }).find('Input');
      const actual = semanticInput.find('label').length;

      expect(actual).toBe(1);
    });

    it('should pass a function as `props.onClick` to `label`', () => {
      const wrapper = getInputController({ label: 'yo' }).find('Input label');

      expectComponentToHaveProps(wrapper, {
        onClick: expect.any(Function),
      });
    });

    it('should render the `props.label`', () => {
      const semanticInput = getInputController({ label: 'yo' }).find('Input');
      const label = semanticInput.find('label');
      const actual = label.contains('yo');

      expect(actual).toBe(true);
    });
  });

  describe('Variation: icon', () => {
    it('should add `props.iconPosition="left"` to `Input`', () => {
      const wrapper = getInputController({
        icon: <Icon name={ICON_NAMES.PHONE} />,
      });

      expectComponentToHaveProps(wrapper, {
        iconPosition: 'left',
      });
    });

    it('should render `props.icon` inside `Input`', () => {
      const semanticInput = getInputController({
        icon: <Icon name={ICON_NAMES.PHONE} />,
      }).find('Input');
      const actual = semanticInput.find(Icon).length;

      expect(actual).toBe(1);
    });
  });

  describe('`componentDidUpdate`', () => {
    it('should call `getIsInputValueReset` with the right arguments', () => {
      const PROPS_VALUE = '🌴';
      const PREVIOUS_PROPS_VALUE = '🌲';
      const wrapper = getInputController({ value: PROPS_VALUE });

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
        const wrapper = getInputController();

        getIsInputValueReset.mockReturnValueOnce(true);

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidUpdate({}, {});

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          value: '',
        });
      });

      it('should not call `props.onChange`', () => {
        const onChange = jest.fn();
        const wrapper = getInputController({ onChange });

        getIsInputValueReset.mockReturnValueOnce(true);

        wrapper
          .instance()
          .componentDidUpdate({}, { value: 'some changed value' });

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `previousProps.value` !== `this.props.value`', () => {
      const PROPS_VALUE = '🌴';
      const PROPS_INITIAL_VALUE = '🌲';
      const PREVIOUS_PROPS_VALUE = '🎄';
      const STATE_VALUE = '🌳';

      it('should call `getControlledInputValue` with the correct arguments', () => {
        const wrapper = getInputController({
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
        const VALUE = '🐑';

        getControlledInputValue.mockReturnValue(VALUE);
        const wrapper = getInputController({
          value: PROPS_VALUE,
        });

        wrapper
          .instance()
          .componentDidUpdate({ value: PREVIOUS_PROPS_VALUE }, {});

        expect(some).toHaveBeenCalledWith(VALUE);
      });

      it('should call `this.setState` with the correct arguments', () => {
        const PROPS_VALUE = '🌴';
        const wrapper = getInputController({ value: PROPS_VALUE });

        wrapper.instance().setState = jest.fn();
        wrapper
          .instance()
          .componentDidUpdate({ value: PREVIOUS_PROPS_VALUE }, {});

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          value: CONTROLLED_VALUE,
        });
      });
    });
  });

  describe('Interaction: onChange', () => {
    const value = '🐸';

    it('should call `props.adaptOnChangeEvent` with the correct arguments', () => {
      const adaptOnChangeEvent = jest.fn();
      const inputController = getInputController({
        adaptOnChangeEvent,
      });
      const htmlInput = inputController.find('input');

      htmlInput.simulate('change', value);

      expect(adaptOnChangeEvent).toHaveBeenCalledWith(value);
    });

    it('should persist the value in component state', () => {
      const inputController = getInputController({
        adaptOnChangeEvent: value => value,
      });
      const htmlInput = inputController.find('input');

      htmlInput.simulate('change', value);
      const actual = inputController.state('value');

      expect(actual).toBe(value);
    });
  });

  describe('State change: value', () => {
    it('should call the function passed as `props.onChange`', () => {
      const value = 'someValue';
      const handleChange = jest.fn();
      const inputController = getInputController({ onChange: handleChange });

      inputController.setState({ value });
      expect(handleChange).toHaveBeenCalledWith(props.name, value);
    });
  });

  describe('Interaction: onClick dynamic `label`', () => {
    it('should force focus on the html `input`', () => {
      const inputController = mount(
        <InputController {...props} label="someLabel">
          {children}
        </InputController>
      );
      const htmlInput = inputController.find('input').instance();
      const htmlLabel = inputController.find('label');

      htmlLabel.simulate('click');
      expect(htmlInput).toBe(document.activeElement);
    });
  });

  describe('`render`', () => {
    it('should call `getControlledInputValue` with the right arguments', () => {
      const INITIAL_VALUE = '👶';
      const PROPS_VALUE = '🎅';
      const STATE_VALUE = '😎';
      const wrapper = getInputController({
        initialValue: INITIAL_VALUE,
        value: PROPS_VALUE,
      });

      wrapper.setState({ value: STATE_VALUE });
      wrapper.instance().render();

      expect(getControlledInputValue).toHaveBeenCalledWith(
        PROPS_VALUE,
        INITIAL_VALUE,
        STATE_VALUE
      );
    });
  });

  it('should have displayName `InputController`', () => {
    expectComponentToHaveDisplayName(InputController, 'InputController');
  });
});
