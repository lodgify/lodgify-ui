import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  Card as SemanticCard,
  Form as SemanticForm,
  FormField as SemanticFormField,
  FormGroup as SemanticFormGroup,
} from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Button } from 'elements/Button';
import { Heading } from 'typography/Heading';
import { TextInput } from 'inputs/TextInput';

import { InputGroup } from '../InputGroup';

import { Component as Form } from './component';

const stringChild = '🚸';
const htmlInputChild = <input />;
const groupChild = (
  <InputGroup>
    <input />
  </InputGroup>
);
const textInputChild = <TextInput name="someName" />;
const headingText = '👥';

const getForm = (children, props) =>
  shallow(<Form {...props}>{children}</Form>);

describe('<Form />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getForm(stringChild);
    expectComponentToBe(wrapper, SemanticCard);
  });

  it('should render a single Semantic UI Card.Content component by default', () => {
    const wrapper = getForm(stringChild);
    expectComponentToHaveChildren(wrapper, SemanticCard.Content);
  });

  describe('Semantic UI Card.Content', () => {
    it('should render a single Semantic UI Form component', () => {
      const wrapper = getForm(stringChild).find(SemanticCard.Content);
      expectComponentToHaveChildren(wrapper, SemanticForm);
    });
  });

  describe('Semantic UI Form', () => {
    const getSemanticForm = () => getForm(stringChild).find(SemanticForm);

    it('should have the right props', () => {
      const wrapper = getSemanticForm();
      expectComponentToHaveProps(wrapper, { onSubmit: expect.any(Function) });
    });

    it('should render each non-group child wrapped in a `FormField`', () => {
      const wrapper = getSemanticForm();
      expectComponentToHaveChildren(wrapper, SemanticFormField);
    });

    it('should set `props.onChange` on each non-grouped child', () => {
      const wrapper = getForm(htmlInputChild)
        .find(SemanticForm)
        .children(SemanticFormField)
        .children('input');
      expectComponentToHaveProps(wrapper, { onChange: expect.any(Function) });
    });

    it('should render each group child wrapped in a `SemanticFormGroup`', () => {
      const wrapper = getForm(groupChild).find(SemanticForm);
      expectComponentToHaveChildren(wrapper, SemanticFormGroup);
    });

    it('should pass `SemanticFormGroup` the right props', () => {
      const wrapper = getForm(groupChild)
        .find(SemanticForm)
        .children(SemanticFormGroup);
      expectComponentToHaveProps(wrapper, { widths: 'equal' });
    });

    it('should nest `FormGroup` > `FormField` > input', () => {
      const wrapper = getForm(groupChild).find(SemanticFormField);
      expectComponentToHaveChildren(wrapper, 'input');
    });

    describe('if `props.actionLink` is passed', () => {
      const getFormWithActionLink = () =>
        getForm(stringChild, {
          actionLink: { text: 'mayday', onClick: () => {} },
        }).find(SemanticForm);

      it('should render the right children', () => {
        const wrapper = getFormWithActionLink();
        expectComponentToHaveChildren(wrapper, SemanticFormField, 'a');
      });

      describe('the `actionLink`', () => {
        const getActionLink = () => getFormWithActionLink().find('a');

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

  describe('Interaction: onChange an input', () => {
    it('should persist the value in component state', () => {
      const event = { target: { value: '🐸' } };
      const form = mount(<Form>{textInputChild}</Form>);
      const htmlInput = form.find('input');
      htmlInput.simulate('change', event);
      const actual = form.state('someName');
      expect(actual).toBe(event.target.value);
    });
  });

  describe('Interaction: onSubmit the form', () => {
    it('should call `props.onSubmit` with the state', () => {
      const onSubmit = jest.fn();
      const event = { target: { value: '🐸' } };
      const form = mount(<Form onSubmit={onSubmit}>{textInputChild}</Form>);
      const htmlInput = form.find('input');
      htmlInput.simulate('change', event);
      const semanticForm = form.children().find(SemanticForm);
      semanticForm.simulate('submit');
      expect(onSubmit).toHaveBeenCalledWith(form.state());
    });
  });

  describe('if `props.headingText` is passed', () => {
    const getFormWithHeading = () => getForm(stringChild, { headingText });

    it('should render it in `CardContent` > `Heading`', () => {
      const wrapper = getFormWithHeading()
        .children(SemanticCard.Content)
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

  it('should have `displayName` Form', () => {
    expectComponentToHaveDisplayName(Form, 'Form');
  });
});
