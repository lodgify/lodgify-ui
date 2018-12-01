import { images } from '../mock-data/images';

import { adaptImages } from './adaptImages';

describe('adaptImages', () => {
  it('should map the input image data correctly', () => {
    const actual = adaptImages(images);

    expect(actual).toMatchSnapshot();
  });
});
