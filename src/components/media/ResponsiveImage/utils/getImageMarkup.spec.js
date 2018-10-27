import { mount } from 'enzyme';

import { getImageMarkup } from './getImageMarkup';

const getImage = () => mount(getImageMarkup(imageProps));

const imageProps = {
  alternativeText: 'someAltText',
  isAvatar: false,
  isFluid: true,
  imageTitle: 'someTitle',
  imageUrl: 'someUrl',
  imageNotFoundLabelText: 'someLabel',
};

describe('`getImageMarkup`', () => {
  it('should render the right structure', () => {
    const actual = getImage();

    expect(actual).toMatchSnapshot();
  });
});
