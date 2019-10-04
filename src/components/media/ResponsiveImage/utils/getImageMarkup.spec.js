import { mount } from 'enzyme';

import { getImageMarkup } from './getImageMarkup';

const props = {
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

const getImage = extraProps => {
  const imageMarkup = getImageMarkup(
    { ...props, ...extraProps },
    handleImageLoad
  );

  return imageMarkup && mount(imageMarkup);
};

describe('`getImageMarkup`', () => {
  it('should render the right structure', () => {
    const actual = getImage();

    expect(actual).toMatchSnapshot();
  });

  describe('if no `imageUrl` or `srcSet` is passed', () => {
    it('should render the right structure', () => {
      const actual = getImage({ imageUrl: null, srcSet: null });

      expect(actual).toBe(false);
    });
  });
});
