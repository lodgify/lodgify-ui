import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from 'react-image-gallery';

import { Component as Slideshow } from './component';
import { images } from './mock-data/images';

const getSlideshow = () => shallow(<Slideshow images={images} />);

describe('<Slideshow />', () => {
  it('should render a single react-image-gallery `ImageGallery` component', () => {
    const wrapper = getSlideshow();
    const actual = wrapper.find(ImageGallery);
    expect(actual).toHaveLength(1);
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
    const actual = Slideshow.displayName;
    expect(actual).toBe('Slideshow');
  });
});
