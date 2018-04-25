import { images } from '../mock-data/images';

import { adaptImages } from './adaptImages';

describe('adaptImages', () => {
  it('should map the input image data correctly', () => {
    const actual = adaptImages(images);
    expect(actual).toHaveLength(images.length);
    expect(actual[0]).toEqual({
      original: images[0].url,
      originalAlt: images[0].alternativeText,
      originalTitle: images[0].title,
      sizes: images[0].sizes,
      srcSet: images[0].sourceSet,
    });
  });
});
