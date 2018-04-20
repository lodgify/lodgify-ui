import React from 'react';
import { shallow, mount } from 'enzyme';
import { Card as SemanticCard } from 'semantic-ui-react';

import { TextInput } from 'elements/TextInput';

import { InputGroup } from '../InputGroup';

import { Component as Form } from './component';

const stringChildren = '🚸';
const htmlInputChild = <input />;
const groupChild = (
  <InputGroup>
    <input />
  </InputGroup>
);
const textInputChild = <TextInput name="someName" />;
const headingText = '👥';

describe('<Form />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const form = shallow(<Form>{stringChildren}</Form>);
    const actual = form.find(SemanticCard);
    expect(actual).toHaveLength(1);
  });

  describe('if `props.headingText` is passed', () => {
    it('should render it in `CardContent` > `Heading`', () => {
      const form = shallow(
        <Form headingText={headingText}>{stringChildren}</Form>
      );
      const actual = form
        .children('CardContent')
        .first()
        .find('Heading')
        .props();
      expect(actual).toEqual(
        expect.objectContaining({
          children: headingText,
        })
      );
    });
  });

  it('should render `CardContent` > `Form` to wrap the children', () => {
    const form = shallow(<Form>{stringChildren}</Form>);
    const actual = form
      .children('CardContent')
      .first()
      .find('Form')
      .props();
    expect(actual).toEqual(
      expect.objectContaining({
        onSubmit: expect.any(Function),
      })
    );
  });

  describe('the Semantic UI `Form` component', () => {
    it('should render each non-group child wrapped in a `FormField`', () => {
      const semanticForm = shallow(<Form>{htmlInputChild}</Form>).find('Form');
      const actual = semanticForm.children('FormField');
      expect(actual).toHaveLength(1);
    });

    it('should set `props.onChange` on each non-grouped child', () => {
      const semanticForm = shallow(<Form>{htmlInputChild}</Form>).find('Form');
      const actual = semanticForm
        .children('FormField')
        .children('input')
        .prop('onChange');
      expect(actual).toEqual(expect.any(Function));
    });

    it('should render each group child wrapped in a `FormGroup`', () => {
      const semanticForm = shallow(<Form>{groupChild}</Form>).find('Form');
      const actual = semanticForm.children('FormGroup');
      expect(actual).toHaveLength(1);
    });

    it('should pass `FormGroup` the right props', () => {
      const semanticForm = shallow(<Form>{groupChild}</Form>).find('Form');
      const actual = semanticForm.children('FormGroup').props();
      expect(actual).toEqual(
        expect.objectContaining({
          widths: 'equal',
        })
      );
    });

    it('should nest `FormGroup` > `FormField` > input', () => {
      const semanticForm = shallow(<Form>{groupChild}</Form>).find('Form');
      const actual = semanticForm
        .children('FormGroup')
        .children('FormField')
        .children('input');
      expect(actual).toHaveLength(1);
    });

    describe('if `props.actionLink` is passed', () => {
      it('should render it ', () => {
        const actionLink = { text: 'someText', onClick: () => {} };
        const semanticForm = shallow(
          <Form actionLink={actionLink}>{stringChildren}</Form>
        ).find('Form');
        const actual = semanticForm.children('a').props();
        expect(actual).toEqual(
          expect.objectContaining({
            children: actionLink.text,
            onClick: actionLink.onClick,
          })
        );
      });
    });

    describe('if `props.submitButtonText` is passed', () => {
      it('should render a Button with the right props', () => {
        const submitButtonText = 'someText';
        const semanticForm = shallow(
          <Form submitButtonText={submitButtonText}>{stringChildren}</Form>
        ).find('Form');
        const actual = semanticForm.children('Button').props();
        expect(actual).toEqual(
          expect.objectContaining({
            children: submitButtonText,
            isPositionedRight: true,
          })
        );
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
      const semanticForm = form.children().find('Form');
      semanticForm.simulate('submit');
      expect(onSubmit).toHaveBeenCalledWith(form.state());
    });
  });

  it('should have `displayName` Form', () => {
    const actual = Form.displayName;
    expect(actual).toBe('Form');
  });
});
