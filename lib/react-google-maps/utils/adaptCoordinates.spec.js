import { adaptCoordinates } from './adaptCoordinates';

describe('adaptCoordinates', () => {
  it('should adapt the argument coordinates into an object', () => {
    const latitude = 22;
    const longitude = 44;
    const actual = adaptCoordinates(latitude, longitude);
    expect(actual).toEqual({
      lat: latitude,
      lng: longitude,
    });
  });
});
