import { getGalleryMarkup } from './getGalleryMarkup';

const images = [
  { imageUrl: 'url', label: 'Entrance' },
  { imageUrl: 'url', label: 'Kitchen' },
];
const propertyName = 'ShoopDaWoop';
const ratingNumber = 9.9;
const secondaryButtonText = 'Wadsworth Constant';

describe('`getViewMoreButtonMarkup`', () => {
  describe('if there are two images or more', () => {
    it('should return the right structure', () => {
      const actual = getGalleryMarkup(
        images,
        propertyName,
        ratingNumber,
        secondaryButtonText
      );

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if there are fewer than two images', () => {
    it('should return null', () => {
      const actual = getGalleryMarkup(
        [images[1]],
        propertyName,
        ratingNumber,
        secondaryButtonText
      );

      expect(actual).toMatchSnapshot();
    });
  });
});
