import { mount } from 'enzyme';

import { getPlaceholderImageMarkup } from './getPlaceholderImageMarkup';

const getPlaceholderImage = extraProps =>
  mount(getPlaceholderImageMarkup({ ...imageProps, ...extraProps }));

const imageProps = {
  alternativeText: 'someAltText',
  handleImageLoad: Function.prototype,
  imageNotFoundLabelText: 'someLabel',
  imageTitle: 'someTitle',
  isAvatar: false,
  isImageLoaded: true,
  placeholderImageUrl: 'anotherUrl',
};

describe('`getPlaceholderImageMarkup`', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `shouldImageLoad === true`', () => {
    const getPlaceholderWithImageLoad = extraProps =>
      getPlaceholderImage({ shouldImageLoad: true, ...extraProps });

    it('should render the right structure', () => {
      const actual = getPlaceholderWithImageLoad();

      expect(actual).toMatchSnapshot();
    });

    describe('if `imageUrl` is passed', () => {
      it('should render the right structure', () => {
        const actual = getPlaceholderWithImageLoad({
          imageUrl: 'yoyoUrl',
        });

        expect(actual).toMatchSnapshot();
      });
    });
  });

  describe('if `shouldImageLoad === false`', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage({ shouldImageLoad: false });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isImageLoaded === false`', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage({ isImageLoaded: false });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isImageLoadedFromCache === true`', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage({
        isImageLoadedFromCache: true,
        shouldImageLoad: true,
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isImageLoadedFromCache === false`', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage({
        isImageLoadedFromCache: false,
        shouldImageLoad: true,
      });

      expect(actual).toMatchSnapshot();
    });
  });
});
