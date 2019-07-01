import React from 'react';
import { mount } from 'enzyme';

import { ComponentWithLazyLoad as ResponsiveImage } from './component';

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

const getWrappedResponsiveImage = extraProps =>
  getResponsiveImage(extraProps).find('ResponsiveImage');

describe('<ResponsiveImage />', () => {
  describe('by default', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.placeholderImageUrl` is passed', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage({
        placeholderImageUrl: 'ayyy',
      });

      expect(actual).toMatchSnapshot();
    });

    it('should call the Image constructor', () => {
      const wrapper = getWrappedResponsiveImage({
        placeholderImageUrl: 'ayyy',
      });

      global.Image = jest.fn();

      wrapper.instance().componentDidMount();

      expect(global.Image).toHaveBeenCalled();
    });

    it('should call setState with the right arguments', () => {
      const wrapper = getWrappedResponsiveImage({
        placeholderImageUrl: 'ayyy',
      });

      global.Image = jest.fn(() => ({ complete: true }));

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        shouldImageLoad: true,
        isImageLoaded: true,
      });
    });
  });

  describe('if `props.label` is passed', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage({ label: '🔷' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isLazyLoaded` is false', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage({ isLazyLoaded: false });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('on mount', () => {
    it('should set `shouldImageLoad` to `true` in the components state', () => {
      const wrapper = getWrappedResponsiveImage();

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
      const wrapper = getWrappedResponsiveImage();

      wrapper.instance().handleImageLoad();
      const actual = wrapper.state();

      expect(actual).toEqual({
        isImageLoaded: true,
        shouldImageLoad: true,
      });
    });
  });
});
