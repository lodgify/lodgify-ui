import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from 'react-image-gallery';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Heading } from 'typography/Heading';

import { Component as Slideshow } from './component';
import { images } from './mock-data/images';

const getSlideshow = props => shallow(<Slideshow images={images} {...props} />);
const getImageGallery = props => getSlideshow(props).find(ImageGallery);

describe('<Slideshow />', () => {
  it('should render a fragment with the right children', () => {
    const wrapper = getSlideshow();

    expectComponentToHaveChildren(wrapper, ImageGallery);
  });

  describe('if `props.headingText` is passed', () => {
    const headingText = '🎧';

    it('should render a `Heading` component', () => {
      const wrapper = getSlideshow({ headingText });

      expectComponentToHaveChildren(wrapper, Heading, ImageGallery);
    });

    describe('the `Heading` component', () => {
      it('should have the right children', () => {
        const wrapper = getSlideshow({ headingText }).find(Heading);

        expectComponentToHaveChildren(wrapper, headingText);
      });
    });
  });

  describe('the `ImageGallery` component', () => {
    it('should get the right props', () => {
      const wrapper = getImageGallery();

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
      const wrapper = getImageGallery({
        isStretched: true,
      });

      expectComponentToHaveProps(wrapper, { additionalClass: 'fit-height' });
    });
  });

  describe('if `ImageGallery` `props.isRounded === false`', () => {
    it('should get the right props', () => {
      const wrapper = getImageGallery({
        isRounded: false,
      });

      expectComponentToHaveProps(wrapper, {
        additionalClass: 'no-border-radius',
      });
    });
  });

  describe('if `ImageGallery` `props.hasShadow === false`', () => {
    it('should get the right props', () => {
      const wrapper = getImageGallery({
        hasShadow: false,
      });

      expectComponentToHaveProps(wrapper, { additionalClass: 'no-shadow' });
    });
  });

  it('should have displayName `Slideshow`', () => {
    expectComponentToHaveDisplayName(Slideshow, 'Slideshow');
  });
});
