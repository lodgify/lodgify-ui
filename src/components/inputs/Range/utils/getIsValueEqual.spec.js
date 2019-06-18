import { getIsValueEqual } from './getIsValueEqual';

describe('getIsValueEqual', () => {
  describe('if `valueArrayOne` and `valueArrayTwo` are not equal', () => {
    it('should return `false`', () => {
      const testCases = [
        { valueArrayOne: [], valueArrayTwo: [1] },
        { valueArrayOne: [1, 2], valueArrayTwo: [1] },
        { valueArrayOne: [1, 2], valueArrayTwo: [1, 2, 3] },
        { valueArrayOne: [4], valueArrayTwo: [] },
      ];

      testCases.forEach(({ valueArrayOne, valueArrayTwo }) => {
        const actual = getIsValueEqual(valueArrayOne, valueArrayTwo);

        expect(actual).toBe(false);
      });
    });
  });

  describe('if `valueArrayOne` and `valueArrayTwo` are equal', () => {
    it('should return `false`', () => {
      const testCases = [
        { valueArrayOne: [], valueArrayTwo: [] },
        { valueArrayOne: [1, 2], valueArrayTwo: [1, 2] },
        { valueArrayOne: [1, 2, 3], valueArrayTwo: [1, 2, 3] },
      ];

      testCases.forEach(({ valueArrayOne, valueArrayTwo }) => {
        const actual = getIsValueEqual(valueArrayOne, valueArrayTwo);

        expect(actual).toBe(true);
      });
    });
  });

  describe('if `valueArrayOne` and `valueArrayTwo` are not defined', () => {
    it('should return `true`', () => {
      const actual = getIsValueEqual();

      expect(actual).toBe(true);
    });
  });
});
