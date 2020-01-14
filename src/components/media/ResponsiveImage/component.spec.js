import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as ResponsiveImage } from './component';

const testid = testidSelectorFactory('responsive-image');

global.Image = jest.fn(function() {
  this.complete = true;
});
const getResponsiveImage = props => mount(<ResponsiveImage {...props} />);

describe('<ResponsiveImage />', () => {
  describe('`render`', () => {
    describe('by default', () => {
      it('should mount properly', () => {
        const actual = getResponsiveImage();

        expect(actual.find(testid()).length > 0).toBe(true);
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

        actual.update();
        const semanticImage = actual.find(testid('img')).first();

        act(() => {
          semanticImage.props().onLoad();
        });
        actual.update();

        expect(
          actual
            .find(testid())
            .props()
            .className.includes('isLoaded')
        ).toBe(true);
      });
    });
    describe('with label', () => {
      it('should render the label', () => {
        const actual = getResponsiveImage({ label: 'foo' });

        expect(actual.find(testid('label')).length > 0).toBe(true);
      });
    });
  });
});
