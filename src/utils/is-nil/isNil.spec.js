import { isNil } from './isNil';

describe('isNil', () => {
  const values = [
    { unitTest: 'string', value: false },
    { unitTest: 1, value: false },
    { unitTest: {}, value: false },
    { unitTest: [], value: false },
    { unitTest: undefined, value: true },
    { unitTest: null, value: true },
  ];

  values.map(({ unitTest, value }) => {
    it('should return the correct value', () => {
      const actual = isNil(unitTest);

      expect(actual).toBe(value);
    });
  });
});
