import { getPropertyTypeWithDot } from './getPropertyTypeWithDot';

describe('getPropertyTypeWithDot', () => {
  describe('if `ratingNumber` is greater than 1', () => {
    it('should return the `propertyType` with a dot', () => {
      const ratingNumber = 5;
      const propertyType = 'mean';

      const actual = getPropertyTypeWithDot(ratingNumber, propertyType);

      expect(actual).toBe('· mean');
    });
  });

  describe('if `ratingNumber` is zero', () => {
    it('should return the `propertyType` without a dot', () => {
      const ratingNumber = 0;
      const propertyType = 'mean';

      const actual = getPropertyTypeWithDot(ratingNumber, propertyType);

      expect(actual).toBe('mean');
    });
  });
});
