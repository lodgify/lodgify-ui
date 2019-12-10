import { CONTROL_SIZE, MIN_ZOOM } from '../constants';

import { getMapOptions } from './getMapOptions';

describe('getMapOptions', () => {
  it('should return the right shape', () => {
    const actual = getMapOptions();

    expect(actual).toEqual({
      mapTypeControl: false,
      streetViewControl: false,
      controlSize: CONTROL_SIZE,
      minZoom: MIN_ZOOM,
    });
  });
});
