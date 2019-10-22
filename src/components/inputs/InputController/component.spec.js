jest.mock('utils/get-is-input-value-reset');
jest.mock('utils/get-controlled-input-value');
jest.mock('utils/some');

import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon, ICON_NAMES } from 'elements/Icon';

import { Component as InputController } from './component';

const props = {
  error: false,
  isValid: false,
  name: 'someName',
  onChange: Function.prototype,
};
const children = <input />;

const getInputController = extraProps =>
  shallow(
    <InputController {...props} {...extraProps}>
      {children}
    </InputController>
  );
const getInputControllerInput = extraProps =>
  getInputController(extraProps).find('Input');

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

        getChildInput({ mapValueToProps, value: VALUE });

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
  });

  it('should have displayName `InputController`', () => {
    expectComponentToHaveDisplayName(InputController, 'InputController');
  });
});
