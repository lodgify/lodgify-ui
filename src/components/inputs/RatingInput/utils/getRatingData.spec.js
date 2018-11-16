import { getRatingData } from './getRatingData';

describe('getRatingData', () => {
  it('shoud return the rating value', () => {
    const ratingData = {
      rating: 4,
    };
    const actual = getRatingData({}, ratingData);

    expect(actual).toBe(4);
  });
});
