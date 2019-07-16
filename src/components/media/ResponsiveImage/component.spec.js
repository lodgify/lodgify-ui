jest.mock('./utils/getImageMarkup');
jest.mock('./utils/getPlaceholderImageMarkup');

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import {
  Component as ResponsiveImage,
  ComponentWithLazyLoad,
} from './component';
import { getImageMarkup } from './utils/getImageMarkup';
import { getPlaceholderImageMarkup } from './utils/getPlaceholderImageMarkup';

const getResponsiveImage = props => shallow(<ResponsiveImage {...props} />);

getImageMarkup.mockReturnValue(<img id="image" />);
getPlaceholderImageMarkup.mockReturnValue(<img id="placeholderImage" />);

describe('<ResponsiveImage />', () => {
  describe('`componentDidMount`', () => {
    describe('if `props.placeholderImageUrl` is passed', () => {
      it('should create a new `Image` with the right attributes', () => {
        const sizes = 'some sizes';
        const imageUrl = 'some imageUrl';
        const srcSet = 'some srcSet';
        const wrapper = getResponsiveImage({
          placeholderImageUrl: 'ayyy',
          sizes,
          imageUrl,
          srcSet,
        });
        const fullsizeImage = {};

        global.Image = jest.fn(() => fullsizeImage);

        wrapper.instance().componentDidMount();

        expect(global.Image).toHaveBeenCalled();
        expect(fullsizeImage).toEqual({
          sizes,
          src: imageUrl,
          srcset: srcSet,
        });
      });

      it('should call `setState` with the right arguments', () => {
        const wrapper = getResponsiveImage({
          placeholderImageUrl: 'ayyy',
        });
        const complete = 'I am a complete status';

        global.Image = jest.fn(() => ({ complete }));

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidMount();

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          shouldImageLoad: true,
          isImageLoaded: complete,
        });
      });
    });

    describe('if `props.placeholderImageUrl` is not passed', () => {
      it('should call `setState` with the right arguments', () => {
        const wrapper = getResponsiveImage();

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidMount();

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          shouldImageLoad: true,
        });
      });
    });
  });

  describe('`handleImageLoad`', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getResponsiveImage();

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().handleImageLoad();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        isImageLoaded: true,
      });
    });
  });

  describe('`render`', () => {
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
    });

    describe('if `props.isFluid` is passed', () => {
      it('should have the right structure', () => {
        const actual = getResponsiveImage({
          isFluid: true,
        });

        expect(actual).toMatchSnapshot();
      });
    });

    describe('if `props.hasRoundedCorners` is passed', () => {
      it('should have the right structure', () => {
        const actual = getResponsiveImage({
          hasRoundedCorners: true,
        });

        expect(actual).toMatchSnapshot();
      });
    });

    describe('if `props.isCircular` is passed', () => {
      it('should have the right structure', () => {
        const actual = getResponsiveImage({
          isCircular: true,
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

    describe('if `props.isLazyLoaded` is false', () => {
      it('should have the right structure', () => {
        const actual = getResponsiveImage({ isLazyLoaded: false });

        expect(actual).toMatchSnapshot();
      });
    });
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(ResponsiveImage, 'ResponsiveImage');
  });

  it('should get wrapped by `withLazyLoad`', () => {
    const wrapper = mount(<ComponentWithLazyLoad />);

    expect(wrapper).toMatchSnapshot();
  });
});
