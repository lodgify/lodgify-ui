import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Form } from './component';
import { DEFAULT_IS_REQUIRED_MESSAGE } from './constants';

const stringChild = '🚸';
const headingText = '👥';

const getShallowForm = (children, props) =>
  shallow(<Form {...props}>{children}</Form>);

const getMountedForm = (children, props) =>
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

  describe('`handleInputBlur`', () => {
    describe('if there is an `is required` type error', () => {
      it('should set the error to component state', () => {
        const name = '🐸';
        const wrapper = getShallowForm(<input />, {
          validation: { [name]: { isRequired: true } },
        });

        wrapper.instance().handleInputBlur(name);

        const actual = wrapper.state();

        expect(actual).toEqual({
          [name]: { error: DEFAULT_IS_REQUIRED_MESSAGE },
        });
      });
    });

    describe('if there is no `is required` type error', () => {
      it('should set the error to component state', () => {
        const name = '🐸';
        const wrapper = getShallowForm(<input />);

        wrapper.instance().handleInputBlur(name);

        const actual = wrapper.state();

        expect(actual).toEqual({});
      });
    });
  });

  describe('`handleInputChange`', () => {
    it('should set `error`, `isValid` and `value` to component state', () => {
      const name = '🐸';
      const value = '🌴';
      const wrapper = getShallowForm(<input />);

      wrapper.instance().handleInputChange(name, value);

      const actual = wrapper.state();

      expect(actual).toEqual({
        [name]: { error: false, isValid: undefined, value: '🌴' },
      });
    });

    describe('if there is an `is required` type error', () => {
      it('should set the error to component state', () => {
        const name = '🐸';
        const value = '';
        const wrapper = getShallowForm(<input />, {
          validation: { [name]: { isRequired: true } },
        });

        wrapper.instance().handleInputChange(name, value);

        const actual = wrapper.state();

        expect(actual).toEqual({
          [name]: { error: DEFAULT_IS_REQUIRED_MESSAGE },
        });
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
