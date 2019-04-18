import React from 'react';
import { shallow } from 'enzyme';
import { FormField } from 'semantic-ui-react';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getClonedInput } from './getClonedInput';

const name = 'Bertie';
const width = 'six';
const onChange = jest.fn();
const input = <input name={name} onChange={onChange} width={width} />;
const someOtherProperty = '👋';
const handleInputBlur = jest.fn();
const handleInputFocus = jest.fn();
const handleInputChange = jest.fn();
const parent = {
  handleInputBlur,
  handleInputChange,
  handleInputFocus,
  state: {
    [name]: { someOtherProperty },
  },
};
const getClonedInputAsComponent = () =>
  shallow(<div>{getClonedInput(input, parent)}</div>);

describe('getClonedInput', () => {
  it('should return a Semantic UI `FormField`', () => {
    const wrapper = getClonedInputAsComponent();

    expectComponentToHaveChildren(wrapper, FormField);
  });

  describe('the `FormField` component', () => {
    const getFormField = () => getClonedInputAsComponent().children();

    it('should have the right children', () => {
      const wrapper = getFormField();

      expectComponentToHaveChildren(wrapper, 'input');
    });

    it('should have the right props', () => {
      const wrapper = getFormField();

      expectComponentToHaveProps(wrapper, { width });
    });
  });

  describe('the `input` element', () => {
    const getInput = () =>
      getClonedInputAsComponent()
        .find(FormField)
        .children();

    it('should have the right props', () => {
      const wrapper = getInput();

      expectComponentToHaveProps(wrapper, {
        onBlur: expect.any(Function),
        onChange: expect.any(Function),
        someOtherProperty,
      });
    });

    describe('the `props.onBlur` function', () => {
      it('should call `parent.handleInputBlur` with the right arguments', () => {
        const wrapper = getInput();

        wrapper.props().onBlur();

        expect(handleInputBlur).toHaveBeenCalledWith(name);
      });
    });

    describe('the `props.onChange` function', () => {
      const wrapper = getInput();
      const value = '🌉';

      wrapper.props().onChange(name, value);

      it('should call `parent.handleInputChange` with the right arguments', () => {
        expect(handleInputChange).toHaveBeenCalledWith(name, value);
      });

      it('should call the original `input.props.onChange` with the right arguments', () => {
        expect(onChange).toHaveBeenCalledWith(name, value);
      });
    });
  });
});
