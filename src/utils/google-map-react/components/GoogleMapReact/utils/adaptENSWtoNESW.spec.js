import { adaptENSWtoNESW } from './adaptENSWtoNESW';

describe('adaptENSWtoNESW', () => {
  it('should return the right shape', () => {
    const east = 'some east';
    const north = 'some north';
    const south = 'some south';
    const west = 'some west';
    const actual = adaptENSWtoNESW({
      east,
      north,
      south,
      west,
    });

    expect(actual).toEqual({
      ne: { lat: north, lng: east },
      sw: { lat: south, lng: west },
    });
  });
});
