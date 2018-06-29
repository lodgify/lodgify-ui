import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from 'react-image-gallery';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Slideshow } from './component';
import { images } from './mock-data/images';

const getSlideshow = () => shallow(<Slideshow images={images} />);

describe('<Slideshow />', () => {
  it('should render a single react-image-gallery `ImageGallery` component', () => {
    const wrapper = getSlideshow();
    expectComponentToBe(wrapper, ImageGallery);
  });

  describe('the `ImageGallery` component', () => {
    it('should get the right props', () => {
      const wrapper = getSlideshow();
      const actual = wrapper.find(ImageGallery).props();
      expect(actual).toEqual(
        expect.objectContaining({
          items: expect.any(Array),
          lazyLoad: true,
          renderRightNav: expect.any(Function),
          renderLeftNav: expect.any(Function),
          showBullets: true,
          showFullscreenButton: false,
          showPlayButton: false,
          showThumbnails: false,
        })
      );
    });
  });

  it('should have displayName `Slideshow`', () => {
    expectComponentToHaveDisplayName(Slideshow, 'Slideshow');
  });
});
