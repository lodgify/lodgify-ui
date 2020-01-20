import React from 'react';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as Logo } from './component';
import { TEST_ID_PREFIX, LOGO_CLASS } from './constants';

const mountLogo = props => mount(<Logo {...props} />);
const testid = testidSelectorFactory(TEST_ID_PREFIX);

describe('Logo', () => {
  describe('passing `logoSubText`', () => {
    it('should return a paragraph with the sub text', () => {
      const wrapper = mountLogo({ logoSubText: 'foo' });
      const subtext = wrapper.find(testid('subtext'));

      expect(wrapper.find(testid()).length > 0).toBe(true);
      expect(subtext.length > 0).toBe(true);
    });
  });

  describe('passing `logoSrc`', () => {
    it('should return an image with the sub text', () => {
      const wrapper = mountLogo({ logoSrc: 'foo' });
      const image = wrapper.find(testid('image'));

      expect(image.length > 0).toBe(true);
    });
  });

  describe('WEB-553', () => {
    describe('when the component is mounted', () => {
      it(`should have an element in the DOM that has the class 'logo' `, () => {
        const wrapper = mountLogo({ logoHref: 'foo' });
        const classContainer = wrapper.getDOMNode();

        expect(classContainer.className.includes(LOGO_CLASS)).toBe(true);
      });
    });
  });
});
