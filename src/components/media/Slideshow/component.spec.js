jest.mock('./utils/adaptImages');

import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { testidSelectorFactory } from 'utils/testid';

import { adaptImages } from './utils/adaptImages';
import { Component as Slideshow } from './component';
import { images, adaptedImages } from './mock-data/images';

adaptImages.mockReturnValue(adaptedImages);
const testid = testidSelectorFactory('slideshow');

const getSlideshow = props => mount(<Slideshow images={images} {...props} />);

describe('<Slideshow />', () => {
  describe('by default', () => {
    it('should return the right structure', () => {
      const component = getSlideshow();

      expect(component.find(testid()).length).toEqual(1);
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

  describe('if `ImageGallery` `props.showThumbnails === true`', () => {
    it('should return the right structure', () => {
      const actual = getSlideshow({
        showThumbnails: true,
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `ImageGallery` `props.showIndex === true`', () => {
    it('should return the right structure', () => {
      const actual = getSlideshow({
        showIndex: true,
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

  describe('Interaction: onSlide', () => {
    it('should switch the slide using the image index', () => {
      act(() => {
        let wrapper = shallow(<Slideshow images={images} />);
        let description = wrapper.find(testid('description'));

        expect(description.text()).toEqual(images[0].descriptionText);

        const trigger = wrapper.find(testid());

        trigger.props().onSlide(1);
        wrapper.update();
        description = wrapper.find(testid('description'));
        expect(description.text()).toEqual(images[1].descriptionText);
      });
    });
  });

  it('should have displayName `Slideshow`', () => {
    expectComponentToHaveDisplayName(Slideshow, 'Slideshow');
  });
});
