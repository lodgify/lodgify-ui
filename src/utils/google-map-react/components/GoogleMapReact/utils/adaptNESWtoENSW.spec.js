import { adaptNESWtoENSW } from './adaptNESWtoENSW';

describe('adaptNESWtoENSW', () => {
  it('should return the right shape', () => {
    const east = 'some east';
    const north = 'some north';
    const south = 'some south';
    const west = 'some west';
    const actual = adaptNESWtoENSW({
      ne: { lat: north, lng: east },
      sw: { lat: south, lng: west },
    });

    expect(actual).toEqual({
      east,
      north,
      south,
      west,
    });
  });
});
