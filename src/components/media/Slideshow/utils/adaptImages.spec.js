import { images } from '../mock-data/images';

import { adaptImages } from './adaptImages';

const brokenImageUrl = 'https://glue.cdbcdn.com/bicep/bicep.jpg';

describe('adaptImages', () => {
  describe('if all images have correct urls', () => {
    it('should map the input image data correctly', () => {
      const actual = adaptImages(images, brokenImageUrl);

      expect(actual).toMatchSnapshot();
    });
  });
});
