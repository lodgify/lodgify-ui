import React from 'react';
import { shallow } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as Logo } from './component';

const mountHeaderLogo = props => shallow(<Logo {...props} />);
const testid = testidSelectorFactory('logo');

describe('Logo', () => {
  describe('passing `logoSubText`', () => {
    it('should return a paragraph with the sub text', () => {
      const wrapper = mountHeaderLogo({ logoSubText: 'foo' });
      const subtext = wrapper.find(testid('subtext'));

      expect(wrapper.find(testid()).length).toEqual(1);
      expect(subtext.length).toEqual(1);
    });
  });
  describe('passing `logoSrc`', () => {
    it('should return an image with the sub text', () => {
      const wrapper = mountHeaderLogo({ logoSrc: 'foo' });
      const image = wrapper.find(testid('image'));

      expect(image.length).toEqual(1);
    });
  });
});
