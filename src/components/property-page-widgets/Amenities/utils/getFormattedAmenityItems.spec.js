import { getFormattedAmenityItems } from './getFormattedAmenityItems';

describe('`getFormattedAmenityItems`', () => {
  it('should format the items in an array correctly', () => {
    const actual = getFormattedAmenityItems(['yo', 'yo', 'yo']);

    expect(actual).toEqual(['yo, ', 'yo and ', 'yo']);
  });
});
