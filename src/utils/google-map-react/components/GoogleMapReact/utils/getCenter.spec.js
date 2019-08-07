jest.mock('./adaptCoordinates');

import { adaptCoordinates } from './adaptCoordinates';
import { getCenter } from './getCenter';

describe('getCenter', () => {
  describe('if `centerFromBounds` is `null`', () => {
    it('should call `adaptCoordinates` with the right arguments', () => {
      const latitude = 'some latitude';
      const longitude = 'some longitude';

      getCenter(null, latitude, longitude);
      expect(adaptCoordinates).toHaveBeenCalledWith(latitude, longitude);
    });

    it('should return whatever `adaptCoordinates` returns', () => {
      const COORDINATES = 'coordinate';

      adaptCoordinates.mockReturnValueOnce(COORDINATES);

      const actual = getCenter(null, 'some latitude', 'some longitude');

      expect(actual).toBe(COORDINATES);
    });
  });

  describe('if `centerFromBounds` is not `null`', () => {
    it('should return `centerFromBounds`', () => {
      const centerFromBounds = 'some center';
      const actual = getCenter(centerFromBounds);

      expect(actual).toBe(centerFromBounds);
    });
  });
});
