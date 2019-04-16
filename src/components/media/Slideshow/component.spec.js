jest.mock('react-image-gallery', () => {
  const { Component } = require('react');

  class ImageGallery extends Component {
    render() {
      return <div />;
    }
  }

  return ImageGallery;
});

jest.mock('./utils/setImageGallerySlidesHeight');
jest.mock('./utils/getImageHeight');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Slideshow } from './component';
import { images } from './mock-data/images';
import { setImageGallerySlidesHeight } from './utils/setImageGallerySlidesHeight';
import { getImageHeight } from './utils/getImageHeight';

const getSlideshow = props => mount(<Slideshow images={images} {...props} />);

describe('<Slideshow />', () => {
  describe('by default', () => {
    it('should return the right structure', () => {
      const actual = getSlideshow();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.headingText` is passed', () => {
    const headingText = '🎧';

    it('should return the right structure', () => {
      const actual = getSlideshow({ headingText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `images` have `descriptionText`', () => {
    it('should return the right structure', () => {
      const images = [
        {
          descriptionText: 'frrrrrp',
          url: 'some url',
        },
      ];
      const actual = getSlideshow({ images });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `ImageGallery` `props.isStretched === true`', () => {
    it('should return the right structure', () => {
      const actual = getSlideshow({
        isStretched: true,
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `ImageGallery` `props.isRounded === false`', () => {
    it('should get the right props', () => {
      const actual = getSlideshow({
        isRounded: false,
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `ImageGallery` `props.hasShadow === false`', () => {
    it('should get the right props', () => {
      const actual = getSlideshow({
        hasShadow: false,
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('`handleSlide`', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = shallow(<Slideshow images={images} />);
      const index = 999;

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().handleSlide(index);

      expect(wrapper.instance().setState).toHaveBeenCalledWith({ index });
    });
  });

  describe('`handleResize`', () => {
    it('should call `getImageHeight` with the right argument', () => {
      const wrapper = shallow(<Slideshow images={images} />);

      wrapper.instance().createComponentRef(<div />);
      wrapper.update();
      wrapper.instance().handleResize();

      expect(getImageHeight).toHaveBeenCalledWith(<div />);
    });

    it('should call `setImageGallerySlidesHeight`', () => {
      const wrapper = shallow(<Slideshow images={images} />);

      getImageHeight.mockReturnValueOnce(100);

      wrapper.update();
      wrapper.instance().handleResize();
      expect(setImageGallerySlidesHeight).toHaveBeenCalledWith(100, undefined);
    });
  });

  describe('`handleImageLoad`', () => {
    it('should call `setImageGallerySlidesHeight`', () => {
      const wrapper = shallow(<Slideshow images={images} />);

      const event = { target: { height: 10 } };

      wrapper.instance().createComponentRef(<div />);
      wrapper.update();
      wrapper.instance().handleImageLoad(event, <div />);

      expect(setImageGallerySlidesHeight).toHaveBeenCalledWith(
        event.target.height,
        <div />
      );
    });
  });

  describe('`handleImageError`', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = shallow(<Slideshow images={images} />);
      const event = {
        target: { src: 'bellbottoms=the?john&spencer=blues&h=explosion' },
      };

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().handleImageError(event);

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        brokenImageSource: event.target.src,
      });
    });
  });

  it('should have displayName `Slideshow`', () => {
    expectComponentToHaveDisplayName(Slideshow, 'Slideshow');
  });
});
