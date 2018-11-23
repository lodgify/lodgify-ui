import React from 'react';
import { shallow } from 'enzyme';
import { Card, Form as SemanticForm, FormField } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Button } from 'elements/Button';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';

import { Component as Form } from './component';
import { DEFAULT_IS_REQUIRED_MESSAGE } from './constants';

const stringChild = '🚸';
const headingText = '👥';

const getForm = (children, props) =>
  shallow(<Form {...props}>{children}</Form>);

describe('<Form />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getForm(stringChild);

    expectComponentToBe(wrapper, Card);
  });

  it('should render a single Semantic UI Card.Content component by default', () => {
    const wrapper = getForm(stringChild);

    expectComponentToHaveChildren(wrapper, Card.Content);
  });

  describe('Semantic UI Card.Content', () => {
    it('should render a single Semantic UI Form component', () => {
      const wrapper = getForm(stringChild).find(Card.Content);

      expectComponentToHaveChildren(wrapper, SemanticForm);
    });
  });

  describe('Semantic UI Form', () => {
    const getSemanticForm = () => getForm(stringChild).find(SemanticForm);

    it('should have the right props', () => {
      const wrapper = getSemanticForm();

      expectComponentToHaveProps(wrapper, { onSubmit: expect.any(Function) });
    });

    it('should render whatever `getFormChild` returns', () => {
      const wrapper = getSemanticForm();

      expectComponentToHaveChildren(wrapper, FormField);
    });

    describe('if `props.actionLink` is passed', () => {
      const getFormWithActionLink = () =>
        getForm(stringChild, {
          actionLink: { text: 'mayday', onClick: () => {} },
        }).find(SemanticForm);

      it('should render the right children', () => {
        const wrapper = getFormWithActionLink();

        expectComponentToHaveChildren(wrapper, FormField, Link);
      });

      describe('the `actionLink`', () => {
        const getActionLink = () => getFormWithActionLink().find(Link);

        it('should have the right props', () => {
          const wrapper = getActionLink();

          expectComponentToHaveProps(wrapper, {
            onClick: expect.any(Function),
          });
        });

        it('should have the right children', () => {
          const wrapper = getActionLink();

          expectComponentToHaveChildren(wrapper, 'mayday');
        });
      });
    });

    describe('if `props.submitButtonText` is passed', () => {
      it('should render a Button with the right props', () => {
        const submitButtonText = 'someText';
        const wrapper = getForm(stringChild, { submitButtonText }).find(Button);

        expectComponentToHaveProps(wrapper, {
          isPositionedRight: true,
        });
      });
    });

    describe('Button', () => {
      it('should have the right children', () => {
        const submitButtonText = 'someText';
        const wrapper = getForm(stringChild, { submitButtonText }).find(Button);

        expectComponentToHaveChildren(wrapper, submitButtonText);
      });
    });
  });

  describe('`handleInputBlur`', () => {
    describe('if there is an `is required` type error', () => {
      it('should set the error to component state', () => {
        const name = '🐸';
        const wrapper = getForm(<input />, {
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
        const wrapper = getForm(<input />);

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
      const wrapper = getForm(<input />);

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
        const wrapper = getForm(<input />, {
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
        const wrapper = getForm(<input />, {
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
        const wrapper = getForm(<input />, {
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
        const wrapper = getForm(<input />, { onSubmit });

        wrapper.instance().handleSubmit();

        expect(onSubmit).toHaveBeenCalledWith(wrapper.state());
      });
    });
  });

  describe('if `props.headingText` is passed', () => {
    const getFormWithHeading = () => getForm(stringChild, { headingText });

    it('should render it in `CardContent` > `Heading`', () => {
      const wrapper = getFormWithHeading()
        .children(Card.Content)
        .at(0);

      expectComponentToHaveChildren(wrapper, Heading);
    });

    describe('Heading', () => {
      it('should have the right children', () => {
        const wrapper = getFormWithHeading().find(Heading);

        expectComponentToHaveChildren(wrapper, headingText);
      });
    });
  });

  describe('if `props.successMessage` is passed', () => {
    it('should render the success message above the submit button', () => {
      const wrapper = getForm(<input />, {
        successMessage: 'This is a successful message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.errorMessage` is passed', () => {
    it('should render the error message above the submit button', () => {
      const wrapper = getForm(<input />, {
        errorMessage: 'This is an error message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` Form', () => {
    expectComponentToHaveDisplayName(Form, 'Form');
  });
});
