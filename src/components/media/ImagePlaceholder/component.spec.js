import React from 'react';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component } from './component';

const testid = testidSelectorFactory('image-placeholder');

describe('ImagePlaceholder', () => {
  describe(`when it's mount`, () => {
    it('will mount one component correctly', () => {
      const wrapper = mount(<Component />);

      expect(wrapper.find(testid()).length > 0).toBe(true);
    });
  });
  describe(`when a className is passed`, () => {
    it('the wrapper will have the same class', () => {
      const wrapper = mount(<Component className="foo" />);

      expect(
        wrapper
          .find(testid())
          .props()
          .className.includes('foo')
      ).toBe(true);
    });
  });
  describe(`when a title is passed`, () => {
    it('the wrapper will have the same title', () => {
      const wrapper = mount(<Component title="foo" />);

      expect(
        wrapper
          .find(testid())
          .props()
          .title.includes('foo')
      ).toBe(true);
    });
  });
});
