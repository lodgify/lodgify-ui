import { getCenterFromBounds } from './getCenterFromBounds';

describe('getCenterFromBounds', () => {
  it('should return the right shape', () => {
    const actual = getCenterFromBounds({
      east: 2,
      north: 1,
      south: -2,
      west: -1,
    });

    expect(actual).toEqual({
      lat: -0.5,
      lng: 0.5,
    });
  });
});
