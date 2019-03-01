jest.mock('lodash/isEqual');
jest.mock('./utils/getEmptyState');
jest.mock('./utils/setInputState');
jest.mock('./utils/getValidationState');
jest.mock('./utils/getIsRequiredState');

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import { isEqual } from 'lodash';

import { getEmptyState } from './utils/getEmptyState';
import { setInputState } from './utils/setInputState';
import { getValidationState } from './utils/getValidationState';
import { getIsRequiredState } from './utils/getIsRequiredState';
import { Component as Form } from './component';
import { DEFAULT_IS_REQUIRED_MESSAGE } from './constants';

const stringChild = '🚸';
const headingText = '👥';

const getShallowForm = (children = '', props) =>
  shallow(<Form {...props}>{children}</Form>);

const getMountedForm = (children = '', props) =>
  mount(<Form {...props}>{children}</Form>);

describe('<Form />', () => {
  describe('by default', () => {
    it('should render the correct structure', () => {
      const actual = getMountedForm(stringChild);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.actionLink` is passed', () => {
    it('should render the correct structure', () => {
      const actual = getMountedForm(stringChild, {
        actionLink: { text: 'mayday', onClick: () => {} },
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.submitButtonText` is passed', () => {
    it('should render the correct structure', () => {
      const submitButtonText = 'someText';
      const actual = getMountedForm(stringChild, { submitButtonText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.submitButtonText` is an empty string', () => {
    it('should render the correct structure', () => {
      const submitButtonText = '';
      const actual = getMountedForm(stringChild, { submitButtonText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.headingText` is passed', () => {
    it('should render the correct structure', () => {
      const actual = getMountedForm(stringChild, { headingText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.successMessage` is passed', () => {
    it('should render the correct structure', () => {
      const actual = getMountedForm(<input />, {
        successMessage: 'This is a successful message',
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.errorMessage` is passed', () => {
    it('should render the correct structure', () => {
      const actual = getMountedForm(<input />, {
        errorMessage: 'This is an error message',
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('`componentDidUpdate`', () => {
    describe('if a fresh `props.successMessage` has been passed', () => {
      it('should call `getEmptyState` with the right arguments', () => {
        const wrapper = getShallowForm(stringChild, {
          successMessage: 'some message',
        });

        wrapper.instance().componentDidUpdate({ successMessage: undefined });

        expect(getEmptyState).toHaveBeenCalledWith(wrapper.state());
      });

      it('should call `setState` with the right arguments', () => {
        const EMPTY_STATE = 'nuthin here';
        const wrapper = getShallowForm(stringChild, {
          successMessage: 'some message',
        });

        getEmptyState.mockReturnValue(EMPTY_STATE);
        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidUpdate({ successMessage: undefined });

        expect(wrapper.instance().setState).toHaveBeenCalledWith(EMPTY_STATE);
      });
    });

    describe('if a fresh `props.successMessage` has not been passed', () => {
      it('should call `Object.entries` with the right arguments', () => {
        Object.entries = jest.fn(Object.entries);
        const successMessage = 'some message';
        const wrapper = getShallowForm(stringChild, {
          successMessage,
        });

        wrapper.instance().componentDidUpdate({ successMessage });

        expect(Object.entries).toHaveBeenCalledWith(wrapper.state());
      });

      it('should call `isEqual` with the `previousInputState` and `inputState` for each input', () => {
        const wrapper = getShallowForm(stringChild);
        const previousState = {
          inputOne: {},
          inputTwo: {},
        };
        const state = {
          inputOne: {},
          inputTwo: {},
        };

        wrapper.setState(state);
        wrapper.instance().componentDidUpdate({}, previousState);

        expect(isEqual).toHaveBeenCalledWith(
          previousState.inputOne,
          state.inputOne
        );
        expect(isEqual).toHaveBeenCalledWith(
          previousState.inputTwo,
          state.inputTwo
        );
      });
    });

    describe('if `isEqual` returns `true`', () => {
      it('should not call `getValidationState`', () => {
        const wrapper = getShallowForm(stringChild, {});
        const previousState = {
          someName: {
            value: 1,
          },
        };

        isEqual.mockReturnValueOnce(true);
        wrapper.instance().componentDidUpdate({}, previousState);

        expect(getValidationState).not.toHaveBeenCalled();
      });
    });

    describe('if the input value has changed', () => {
      const inputName = 'some name';
      const previousState = {
        [inputName]: {
          value: 1,
        },
      };
      const state = {
        [inputName]: {
          value: 2,
        },
      };

      it('should call `getValidationState` with the right arguments', () => {
        const validation = { [inputName]: {} };
        const wrapper = getShallowForm(stringChild, { validation });

        wrapper.setState(state);
        wrapper.instance().componentDidUpdate({}, previousState);

        expect(getValidationState).toHaveBeenCalledWith(
          validation[inputName],
          state[inputName].value
        );
      });

      it('should call `setInputState` with the right arguments', () => {
        const validationState = 'some state';
        const wrapper = getShallowForm(stringChild, {});
        const instance = wrapper.instance();

        getValidationState.mockReturnValue(validationState);

        wrapper.setState(state);
        instance.componentDidUpdate({}, previousState);

        expect(setInputState).toHaveBeenCalledWith(
          instance,
          inputName,
          validationState
        );
      });
    });

    describe('if the input has been blurred', () => {
      const inputName = 'some name';
      const previousState = {
        [inputName]: {
          isBlurred: false,
        },
      };
      const state = {
        [inputName]: {
          isBlurred: true,
        },
      };

      it('should call `getIsRequiredState` with the right arguments', () => {
        const validation = { [inputName]: {} };
        const wrapper = getShallowForm(stringChild, { validation });

        wrapper.setState(state);
        wrapper.instance().componentDidUpdate({}, previousState);

        expect(getIsRequiredState).toHaveBeenCalledWith(
          validation[inputName],
          state[inputName]
        );
      });

      it('should call `setInputState` with the right arguments', () => {
        const isRequiredState = 'some state';
        const wrapper = getShallowForm(stringChild, { validation: {} });
        const instance = wrapper.instance();

        getIsRequiredState.mockReturnValue(isRequiredState);

        wrapper.setState(state);
        instance.componentDidUpdate({}, previousState);

        expect(setInputState).toHaveBeenCalledWith(
          instance,
          inputName,
          isRequiredState
        );
      });
    });
  });

  describe('`handleInputBlur`', () => {
    it('should call `setInputState` with the right arguments', () => {
      const wrapper = getShallowForm();
      const name = 'some name';

      const instance = wrapper.instance();

      instance.handleInputBlur(name);

      expect(setInputState).toHaveBeenCalledWith(instance, name, {
        isBlurred: true,
      });
    });
  });

  describe('`handleInputChange`', () => {
    it('should call `setInputState` with the right arguments', () => {
      const wrapper = getShallowForm();
      const name = 'some name';
      const value = 'some value';

      const instance = wrapper.instance();

      instance.handleInputChange(name, value);

      expect(setInputState).toHaveBeenCalledWith(instance, name, {
        isBlurred: false,
        value,
      });
    });
  });

  describe('`handleSubmit`', () => {
    describe('if any input is required and is empty', () => {
      it('should set the error to component state', () => {
        const name = '🐸';
        const wrapper = getShallowForm(<input />, {
          validation: { [name]: { isRequired: true } },
        });

        wrapper.instance().handleSubmit();

        const actual = wrapper.state();

        expect(actual).toEqual({
          [name]: { error: DEFAULT_IS_REQUIRED_MESSAGE },
        });
      });

      it('should not call `props.onSubmit`', () => {
        const onSubmit = jest.fn();
        const name = '🐸';
        const wrapper = getShallowForm(<input />, {
          onSubmit,
          validation: { [name]: { isRequired: true } },
        });

        wrapper.instance().handleSubmit();

        expect(onSubmit).not.toHaveBeenCalledWith(wrapper.state());
      });
    });

    describe('if no input is required and is empty', () => {
      it('should call `props.onSubmit` with the state', () => {
        const onSubmit = jest.fn();
        const wrapper = getShallowForm(<input />, { onSubmit });

        wrapper.instance().handleSubmit();

        expect(onSubmit).toHaveBeenCalledWith(wrapper.state());
      });
    });
  });

  it('should have `displayName` Form', () => {
    expectComponentToHaveDisplayName(Form, 'Form');
  });
});
