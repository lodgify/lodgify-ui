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

  describe('if `props.placeholderImageUrl` and `props.imageUrl` are passed', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage({
        placeholderImageUrl: 'ayyy',
        imageUrl: 'yooo',
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.label` is passed', () => {
    it('should have the right structure', () => {
      const actual = getResponsiveImage({ label: '🔷' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.sources` is passed', () => {
    it('should have the right structure', () => {
      const sources = [
        {
          srcset:
            'https://si5.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=2400&mode=max',
          media: '(min-width: 1200px)',
        },
        {
          srcset:
            'https://si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=1024&mode=max',
          media: '(min-width: 1024px)',
        },
      ];
      const actual = getResponsiveImage({ sources });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('`handleImageLoad`', () => {
    it('should set `isImageLoaded` to `true` in the components state', () => {
      const wrapper = getResponsiveImage();

      wrapper.instance().handleImageLoad();

      const actual = wrapper.state();

      expect(actual).toEqual({
        isImageLoaded: true,
      });
    });
  });

  it('should have `displayName` `ResponsiveImage`', () => {
    expectComponentToHaveDisplayName(ResponsiveImage, 'ResponsiveImage');
  });
});
