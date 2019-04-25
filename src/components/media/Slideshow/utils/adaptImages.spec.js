import { images, brokenImages } from '../mock-data/images';

import { adaptImages } from './adaptImages';

const brokenImageUrl = 'https://glue.cdbcdn.com/bicep/bicep.jpg';

describe('adaptImages', () => {
  describe('if all images have correct urls', () => {
    it('should map the input image data correctly', () => {
      const actual = adaptImages(images, brokenImageUrl);

      expect(actual).toMatchSnapshot();
    });
  });
  describe('if any image has a broken url', () => {
    it('should return an Object with `renderItem` as its only entry', () => {
      const actual = adaptImages(brokenImages, brokenImageUrl);

      expect(actual).toMatchSnapshot();
    });
  });
});
