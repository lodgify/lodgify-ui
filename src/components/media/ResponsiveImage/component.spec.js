import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ResponsiveImage } from './component';

const props = {
  sources: [],
  alternativeText: 'Alternative Text 😝',
  isAvatar: false,
  isFluid: true,
  onLoad: Function.prototype,
  imageTitle: 'ResponsiveImage title',
};

const getResponsiveImage = extraProps =>
  mount(<ResponsiveImage {...props} {...extraProps} />);

describe('<ResponsiveImage />', () => {
  describe('by default', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.placeholderImageUrl` is passed', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage({ placeholderImageUrl: 'ayyy' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.label` is passed', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage({ label: '🔷' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('on mount', () => {
    it('should set `shouldImageLoad` to `true` in the components state', () => {
      const wrapper = getResponsiveImage();

      wrapper.instance().componentDidMount();
      const actual = wrapper.state();

      expect(actual).toEqual({
        isImageLoaded: false,
        shouldImageLoad: true,
      });
    });
  });

  describe('`handleImageLoad`', () => {
    it('should set `isImageLoaded` to `true` in the components state', () => {
      const wrapper = getResponsiveImage();

      wrapper.instance().handleImageLoad();
      const actual = wrapper.state();

      expect(actual).toEqual({
        isImageLoaded: true,
        shouldImageLoad: true,
      });
    });
  });

  it('should have `displayName` `ResponsiveImage`', () => {
    expectComponentToHaveDisplayName(ResponsiveImage, 'ResponsiveImage');
  });
});
