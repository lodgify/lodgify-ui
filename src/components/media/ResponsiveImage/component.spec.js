import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as ResponsiveImage } from './component';

import { ResponsiveImage as ComponentWithLazyLoad } from './index';

const testid = testidSelectorFactory('responsive-image');

global.Image = jest.fn(function() {
  this.complete = true;
});
const getResponsiveImage = props => mount(<ResponsiveImage {...props} />);

describe('<ResponsiveImage />', () => {
  describe('`render`', () => {
    describe('by default', () => {
      it('should have the right structure', () => {
        const actual = getResponsiveImage();

        expect(actual).toMatchSnapshot();
      });
    });
    describe('when the image is unable to load the src', () => {
      it('should replace the content with a block placeholder', () => {
        let actual;

        act(() => {
          actual = getResponsiveImage({
            imageUrl: '',
          });
        });
        actual.update();
        const semanticImage = actual.find(testid('img')).first();

        act(() => {
          semanticImage.props().onError();
        });
        actual.update();

        expect(actual.find(testid('error-placeholder')).length > 0).toBe(true);
      });
    });

    describe('with placeholder', () => {
      it('should load the placeholder first and then the images', () => {
        let actual;

        act(() => {
          actual = getResponsiveImage({
            placeholderImageUrl: 'foo',
            imageUrl: 'bar',
          });
        });

        expect(actual.find(testid('placeholder')).length > 0).toBe(true);
        actual.update();
        const semanticImage = actual.find(testid('img')).first();

        act(() => {
          semanticImage.props().onLoad();
        });
        actual.update();

        expect(actual.find(testid('img')).length > 0).toBe(true);
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

  it('should get wrapped by `withLazyLoad`', () => {
    const wrapper = mount(<ComponentWithLazyLoad />);

    expect(wrapper).toMatchSnapshot();
  });
});
