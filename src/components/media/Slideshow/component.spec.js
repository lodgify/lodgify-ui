import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from 'react-image-gallery';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Slideshow } from './component';
import { images } from './mock-data/images';

const getSlideshow = props => shallow(<Slideshow images={images} {...props} />);

describe('<Slideshow />', () => {
  it('should render a single react-image-gallery `ImageGallery` component', () => {
    const wrapper = getSlideshow();
    expectComponentToBe(wrapper, ImageGallery);
  });

  describe('the `ImageGallery` component', () => {
    it('should get the right props', () => {
      const wrapper = getSlideshow();
      expectComponentToHaveProps(wrapper, {
        items: expect.any(Array),
        lazyLoad: true,
        renderRightNav: expect.any(Function),
        renderLeftNav: expect.any(Function),
        showBullets: true,
        showFullscreenButton: false,
        showPlayButton: false,
        showThumbnails: false,
      });
    });
  });

  describe('if `ImageGallery` `props.isStretched === true`', () => {
    it('should get the right props', () => {
      const wrapper = getSlideshow({
        isStretched: true,
      });
      expectComponentToHaveProps(wrapper, { additionalClass: 'fit-height' });
    });
  });

  describe('if `ImageGallery` `props.isRounded === false`', () => {
    it('should get the right props', () => {
      const wrapper = getSlideshow({
        isRounded: false,
      });
      expectComponentToHaveProps(wrapper, {
        additionalClass: 'no-border-radius',
      });
    });
  });

  describe('if `ImageGallery` `props.hasShadow === false`', () => {
    it('should get the right props', () => {
      const wrapper = getSlideshow({
        hasShadow: false,
      });
      expectComponentToHaveProps(wrapper, { additionalClass: 'no-shadow' });
    });
  });

  it('should have displayName `Slideshow`', () => {
    expectComponentToHaveDisplayName(Slideshow, 'Slideshow');
  });
});
