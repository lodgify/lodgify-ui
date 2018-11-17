import React from 'react';
import { shallow, mount } from 'enzyme';
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
const getInputControllerInput = () => getInputController().find('Input');

describe('<InputController />', () => {
  describe('default behaviour', () => {
    it('should render a single Semantic UI `Input` component', () => {
      const wrapper = getInputController();

      expectComponentToBe(wrapper, Input);
    });

    it('should default to no classNames on `Input`', () => {
      const semanticInput = getInputControllerInput();
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
      it('should get a function as `props.onChange` by default', () => {
        const wrapper = getInputController().find('input');

        expectComponentToHaveProps(wrapper, {
          onChange: expect.any(Function),
        });
      });

      it('should get a function as `props[inputOnChangeFunctionName]` if specified', () => {
        const inputOnChangeFunctionName = 'whoopDeDooo';
        const wrapper = getInputController({
          inputOnChangeFunctionName,
        }).find('input');

        expectComponentToHaveProps(wrapper, {
          [inputOnChangeFunctionName]: expect.any(Function),
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

  it('should have displayName `InputController`', () => {
    expectComponentToHaveDisplayName(InputController, 'InputController');
  });
});
