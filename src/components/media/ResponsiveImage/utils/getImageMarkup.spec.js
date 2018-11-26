import { mount } from 'enzyme';

import { getImageMarkup } from './getImageMarkup';

const props = {
  alternativeText: 'someAltText',
  imageHeight: 'someHeight',
  imageNotFoundLabelText: 'someLabel',
  imageTitle: 'someTitle',
  imageUrl: 'someUrl',
  imageWidth: 'someWidth',
  isAvatar: false,
  sizes: 'someSizes',
  srcSet: 'someSrcs',
};
const handleImageLoad = () => {};

const getImage = extraProps =>
  mount(getImageMarkup({ ...props, ...extraProps }, handleImageLoad));

describe('`getImageMarkup`', () => {
  it('should render the right structure', () => {
    const actual = getImage();

    expect(actual).toMatchSnapshot();
  });

  describe('if no `imageUrl` is passed', () => {
    it('should render the right structure', () => {
      const actual = getImage({ imageUrl: null });

      expect(actual).toMatchSnapshot();
    });
  });
});
