import React from 'react';
import { shallow, mount } from 'enzyme';

import { Component as InputController } from './component';

const props = {
  tagName: 'input',
  error: false,
  isValid: false,
  label: '',
  name: 'someName',
  onChange: Function.prototype,
};

describe('<InputController />', () => {
  describe('default behaviour', () => {
    it('should render a single Semantic UI `Input` component', () => {
      const inputController = shallow(<InputController {...props} />);
      const actual = inputController.find('Input').length;
      expect(actual).toBe(1);
    });

    it('should default to no classNames on `Input`', () => {
      const semanticInput = shallow(<InputController {...props} />).find(
        'Input'
      );
      const classNames = ['dirty', 'valid', 'error'];
      classNames.forEach(className => {
        const actual = semanticInput.hasClass(className);
        expect(actual).toBe(false);
      });
    });

    it('should pass a function as `props.onChange` to `input`', () => {
      const htmlInput = shallow(<InputController {...props} />).find('input');
      const actual = htmlInput.prop('onChange');
      expect(actual).toEqual(expect.any(Function));
    });

    it('should render a single html `input` inside `Input`', () => {
      const semanticInput = shallow(<InputController {...props} />).find(
        'Input'
      );
      const actual = semanticInput.find('input').length;
      expect(actual).toBe(1);
    });

    it('should render a single html `textarea` inside `Input`', () => {
      const semanticInput = shallow(
        <InputController {...props} tagName="textarea" />
      ).find('Input');
      const actual = semanticInput.find('textarea').length;
      expect(actual).toBe(1);
    });

    it('should not render the `ErrorMessage` component', () => {
      const semanticInput = shallow(<InputController {...props} />).find(
        'Input'
      );
      const actual = semanticInput.find('ErrorMessage').length;
      expect(actual).toBe(0);
    });

    it('should not render the `Icon` component', () => {
      const semanticInput = shallow(<InputController {...props} />).find(
        'Input'
      );
      const actual = semanticInput.find('Icon').length;
      expect(actual).toBe(0);
    });

    it('should not render the `label` element', () => {
      const semanticInput = shallow(<InputController {...props} />).find(
        'Input'
      );
      const actual = semanticInput.find('Icon').length;
      expect(actual).toBe(0);
    });

    it('should have displayName `InputController`', () => {
      const actual = InputController.displayName;
      expect(actual).toBe('InputController');
    });
  });

  describe('State: error', () => {
    it('should add `className` `error` to `Input`', () => {
      const errorValues = [true, "Something's not right"];
      errorValues.forEach(errorValue => {
        const semanticInput = shallow(
          <InputController {...props} error={errorValue} />
        ).find('Input');
        const actual = semanticInput.hasClass('error');
        expect(actual).toBe(true);
      });
    });

    describe('if `props.error` is boolean', () => {
      it('should not render the `ErrorMessage` component', () => {
        const inputController = shallow(<InputController {...props} error />);
        const actual = inputController.find('ErrorMessage').length;
        expect(actual).toBe(0);
      });
    });

    describe('if `props.error` is a string', () => {
      it('should treat an empty string as false', () => {
        const semanticInput = shallow(
          <InputController {...props} error="" />
        ).find('Input');
        const actual = semanticInput.hasClass('error');
        expect(actual).toBe(false);
      });

      it('should render a single `ErrorMessage` component', () => {
        const inputController = shallow(
          <InputController {...props} error="Oops" />
        );
        const actual = inputController.find('ErrorMessage').length;
        expect(actual).toBe(1);
      });

      it('should pass `props.error` to the `ErrorMessage` component', () => {
        const errorMessage = 'Oh nooes';
        const inputController = shallow(
          <InputController {...props} error={errorMessage} />
        );
        const actual = inputController
          .find('ErrorMessage')
          .prop('errorMessage');
        expect(actual).toBe(errorMessage);
      });
    });
  });

  describe('State: valid', () => {
    it('should add `className` `valid` to `Input`', () => {
      const semanticInput = shallow(
        <InputController {...props} isValid />
      ).find('Input');
      const actual = semanticInput.hasClass('valid');
      expect(actual).toBe(true);
    });

    it('should render a single `Icon` component', () => {
      const inputController = shallow(<InputController {...props} isValid />);
      const actual = inputController.find('Icon').length;
      expect(actual).toBe(1);
    });

    it('should pass the `Icon` component the right props', () => {
      const inputController = shallow(<InputController {...props} isValid />);
      const actual = inputController.find('Icon').props();
      expect(actual).toEqual(
        expect.objectContaining({
          color: 'green',
          name: 'checkmark',
          size: 'big',
        })
      );
    });
  });

  describe('Variation: labelled', () => {
    it('should render a single html `label` inside `Input`', () => {
      const semanticInput = shallow(
        <InputController {...props} label="yo" />
      ).find('Input');
      const actual = semanticInput.find('label').length;
      expect(actual).toBe(1);
    });

    it('should pass a function as `props.onClick` to `label`', () => {
      const semanticInput = shallow(
        <InputController {...props} label="yo" />
      ).find('Input');
      const label = semanticInput.find('label');
      const actual = label.prop('onClick');
      expect(actual).toEqual(expect.any(Function));
    });

    it('should render the `props.label`', () => {
      const semanticInput = shallow(
        <InputController {...props} label="yo" />
      ).find('Input');
      const label = semanticInput.find('label');
      const actual = label.contains('yo');
      expect(actual).toBe(true);
    });
  });

  describe('Interaction: onChange', () => {
    it('should persist the value in component state', () => {
      const event = { target: { value: '🐸' } };
      const inputController = shallow(<InputController {...props} />);
      const htmlInput = inputController.find('input');
      htmlInput.simulate('change', event);
      const actual = inputController.state('value');
      expect(actual).toBe(event.target.value);
    });
  });

  describe('State change: value', () => {
    it('should call the function passed as `props.onChange`', () => {
      const value = 'someValue';
      const handleChange = jest.fn();
      const inputController = shallow(
        <InputController {...props} onChange={handleChange} />
      );
      inputController.setState({ value });
      expect(handleChange).toHaveBeenCalledWith(props.name, value);
    });
  });

  describe('Interaction: onClick dynamic `label`', () => {
    it('should force focus on the html `input`', () => {
      const inputController = mount(
        <InputController {...props} label="someLabel" />
      );
      const htmlInput = inputController.find('input').instance();
      const htmlLabel = inputController.find('label');
      htmlLabel.simulate('click');
      expect(htmlInput).toBe(document.activeElement);
    });
  });
});
