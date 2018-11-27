import { mount } from 'enzyme';

import { getPlaceholderImageMarkup } from './getPlaceholderImageMarkup';

const props = {
  imageHeight: 'someHeight',
  imageWidth: 'someWidth',
  placeholderImageUrl: 'anotherUrl',
};

const getPlaceholderImage = isImageLoaded =>
  mount(getPlaceholderImageMarkup(props, isImageLoaded));

describe('`getPlaceholderImageMarkup`', () => {
  describe('if `isImageLoaded` is `false`', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage(false);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isImageLoaded` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getPlaceholderImage(true);

      expect(actual).toMatchSnapshot();
    });
  });
});
