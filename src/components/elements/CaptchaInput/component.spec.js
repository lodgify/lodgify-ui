import React from 'react';
import { shallow } from 'enzyme';
import { Form, Image } from 'semantic-ui-react';

import { TextInput } from 'elements/TextInput';

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

    it('should render two children', () => {
      const formGroup = getFormGroup();
      const actual = formGroup.children();
      expect(actual).toHaveLength(2);
    });

    it('should render one Semantic UI `Form.Field` component', () => {
      const formGroup = getFormGroup();
      const actual = formGroup.children(Form.Field);
      expect(actual).toHaveLength(1);
    });

    it('should render one Lodgify UI `TextInput` component', () => {
      const formGroup = getFormGroup();
      const actual = formGroup.children(TextInput);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Form.Field` component', () => {
    it('should render one Semantic UI `Image` component', () => {
      const formField = getCaptchaInput().find(Form.Field);
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
    const actual = CaptchaInput.displayName;
    expect(actual).toBe('CaptchaInput');
  });
});
