import React from 'react';
import { shallow } from 'enzyme';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { TextInput } from 'inputs/TextInput';

import { Component as CaptchaInput } from './component';

const image = 'someUrl';
const getCaptchaInput = () => shallow(<CaptchaInput image={image} />);
const getFormGroup = () => getCaptchaInput().find(Form.Group);

describe('<CaptchaInput />', () => {
  it('should render a single Semantic UI `Form.Group` component', () => {
    const wrapper = getCaptchaInput();

    expectComponentToBe(wrapper, Form.Group);
  });

  describe('the `Form.Group` component', () => {
    it('should get the right props', () => {
      const wrapper = getFormGroup();

      expectComponentToHaveProps(wrapper, {
        widths: 'equal',
      });
    });

    it('should render the right children', () => {
      const wrapper = getFormGroup();

      expectComponentToHaveChildren(wrapper, Form.Field, Form.Field);
    });
  });

  describe('the first `Form.Field` component', () => {
    it('should render one Semantic UI `Image` component', () => {
      const wrapper = getCaptchaInput()
        .find(Form.Field)
        .at(0);

      expectComponentToHaveChildren(wrapper, Image);
    });
  });

  describe('the `Image` component', () => {
    it('should get the right props', () => {
      const wrapper = getCaptchaInput().find(Image);

      expectComponentToHaveProps(wrapper, {
        src: image,
      });
    });
  });

  describe('the second `Form.Field` component', () => {
    it('should render one Lodgify UI `TextInput` component', () => {
      const wrapper = getCaptchaInput()
        .find(Form.Field)
        .at(1);

      expectComponentToHaveChildren(wrapper, TextInput);
    });
  });

  describe('the `TextInput` component', () => {
    it('should get the right props', () => {
      const wrapper = getCaptchaInput().find(TextInput);

      expectComponentToHaveProps(wrapper, {
        error: false,
        isValid: false,
        label: '',
        name: '',
        onChange: Function.prototype,
      });
    });
  });

  it('should have displayName `CaptchaInput`', () => {
    expectComponentToHaveDisplayName(CaptchaInput, 'CaptchaInput');
  });
});
