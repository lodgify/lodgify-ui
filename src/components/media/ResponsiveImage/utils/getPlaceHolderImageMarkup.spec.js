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
  isFluid: true,
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

  describe('if `imageUrl` is passed', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage({ imageUrl: 'yoyoUrl' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isImageLoaded === false`', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage({ isImageLoaded: false });

      expect(actual).toMatchSnapshot();
    });
  });
});
