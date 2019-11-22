import { getGalleryMarkup } from './getGalleryMarkup';

const images = [
  { url: 'url', descriptionText: 'Entrance' },
  { url: 'url', descriptionText: 'Kitchen' },
];

const secondaryButtonText = 'Wadsworth Constant';

describe('`getViewMoreButtonMarkup`', () => {
  describe('if there are two images or more', () => {
    it('should return the right structure', () => {
      const actual = getGalleryMarkup(images, secondaryButtonText);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if there are fewer than two images', () => {
    it('should return null', () => {
      const actual = getGalleryMarkup([images[1]], secondaryButtonText);

      expect(actual).toMatchSnapshot();
    });
  });
});
