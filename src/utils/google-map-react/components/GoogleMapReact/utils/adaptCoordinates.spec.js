import { adaptCoordinates } from './adaptCoordinates';

describe('adaptCoordinates', () => {
  describe('if either `latitude` or `longitude` is `null`', () => {
    it('should return `undefined`', () => {
      const testCases = [[null, null], [null, 1], [1, null]];

      testCases.forEach(([latitude, longitude]) => {
        const actual = adaptCoordinates(latitude, longitude);

        expect(actual).toEqual(undefined);
      });
    });
  });

  describe('if `latitude` and `longitude` are not not `null`', () => {
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
});
