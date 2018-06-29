import React from 'react';
import { shallow } from 'enzyme';
import { Form, Image } from 'semantic-ui-react';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { TextInput } from 'inputs/TextInput';

import { Component as CaptchaInput } from './component';

const image = 'someUrl';
const getCaptchaInput = () => shallow(<CaptchaInput image={image} />);
const getFormGroup = () => getCaptchaInput().find(Form.Group);

describe('<CaptchaInput />', () => {
  it('should render a single Semantic UI `Form.Group` component', () => {
    const actual = getFormGroup();
    expect(actual).toHaveLength(1);
  });

  describe('the `Form.Group` component', () => {
    it('should get the right props', () => {
      const formGroup = getFormGroup();
      const actual = formGroup.props();
      expect(actual).toEqual(
        expect.objectContaining({
          widths: 'equal',
        })
      );
    });

    it('should render two Semantic UI `Form.Field` components', () => {
      const formGroup = getFormGroup();
      const actual = formGroup.children(Form.Field);
      expect(actual).toHaveLength(2);
    });
  });

  describe('the first `Form.Field` component', () => {
    it('should render one Semantic UI `Image` component', () => {
      const formField = getCaptchaInput()
        .find(Form.Field)
        .at(0);
      const actual = formField.children(Image);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Image` component', () => {
    it('should get the right props', () => {
      const imageComponent = getCaptchaInput().find(Image);
      const actual = imageComponent.props();
      expect(actual).toEqual(
        expect.objectContaining({
          src: image,
        })
      );
    });
  });

  describe('the second `Form.Field` component', () => {
    it('should render one Lodgify UI `TextInput` component', () => {
      const formField = getCaptchaInput()
        .find(Form.Field)
        .at(1);
      const actual = formField.children(TextInput);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `TextInput` component', () => {
    it('should get the right props', () => {
      const textInput = getCaptchaInput().find(TextInput);
      const actual = textInput.props();
      expect(actual).toEqual(
        expect.objectContaining({
          error: false,
          isValid: false,
          label: '',
          name: '',
          onChange: Function.prototype,
        })
      );
    });
  });

  it('should have displayName `CaptchaInput`', () => {
    expectComponentToHaveDisplayName(CaptchaInput, 'CaptchaInput');
  });
});
