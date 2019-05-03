jest.mock('react-image-gallery', () => {
  const { Component } = require('react');

  class ImageGallery extends Component {
    render() {
      return <div />;
    }
  }

  return ImageGallery;
});

jest.mock('./utils/getAdaptedImagesWithPlaceholders');
jest.mock('./utils/adaptImages');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { getAdaptedImagesWithPlaceholders } from './utils/getAdaptedImagesWithPlaceholders';
import { adaptImages } from './utils/adaptImages';
import { Component as Slideshow } from './component';
import {
  images,
  adaptedImages,
  adaptedImagesAndBlockPlaceholders,
} from './mock-data/images';

adaptImages.mockReturnValue(adaptedImages);

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

  describe('`handleImageError`', () => {
    it('should call `getAdaptedImagesWithPlaceholders` with the right arguments', () => {
      const wrapper = shallow(<Slideshow images={images} />);
      const event = {
        target: { src: 'bellbottoms=the?john&spencer=blues&h=explosion' },
      };

      wrapper.instance().handleImageError(event);

      expect(getAdaptedImagesWithPlaceholders).toHaveBeenCalledWith(
        adaptedImages,
        event.target.src
      );
    });

    it('should `setState` with whatever `getAdaptedImagesWithPlaceholders` returns', () => {
      const wrapper = shallow(<Slideshow images={images} />);
      const event = {
        target: { src: 'bellbottoms=the?john&spencer=blues&h=explosion' },
      };

      getAdaptedImagesWithPlaceholders.mockReturnValueOnce(
        adaptedImagesAndBlockPlaceholders
      );

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().handleImageError(event);

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        adaptedImages: adaptedImagesAndBlockPlaceholders,
      });
    });
  });

  it('should have displayName `Slideshow`', () => {
    expectComponentToHaveDisplayName(Slideshow, 'Slideshow');
  });
});
