import { getPropertyAmenities } from './getPropertyAmenities';

describe('`getPropertyAmenities`', () => {
  it('should return the right string', () => {
    const amenities = ['suddenly', 'a', 'fat', 'person'];

    const actual = getPropertyAmenities(amenities);

    expect(actual).toBe('suddenly · a · fat · person');
  });
});
