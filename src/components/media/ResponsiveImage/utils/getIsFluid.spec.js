import { getIsFluid } from './getIsFluid';

describe('`getIsFluid`', () => {
  describe('whenever `isFluid` is `true`', () => {
    it('should return `true`', () => {
      const testCases = [
        {
          props: [true, 1, 1],
        },
        {
          props: [true, '1', '1'],
        },
        {
          props: [true, 0, 0],
        },
      ];

      testCases.forEach(({ props }) => {
        const actual = getIsFluid(...props);

        expect(actual).toEqual(true);
      });
    });
  });

  describe('whenever `isFluid` is `false` and `imageWidth` and `imageHeight` are falsy values', () => {
    it('should return `true`', () => {
      const testCases = [
        {
          props: [false, 0, 0],
        },
        {
          props: [false, '', ''],
        },
        {
          props: [false, null, null],
        },
      ];

      testCases.forEach(({ props }) => {
        const actual = getIsFluid(...props);

        expect(actual).toEqual(true);
      });
    });
  });

  describe('whenever `isFluid` is `false` and `imageWidth` and `imageHeight` are truthy values', () => {
    it('should return `false`', () => {
      const testCases = [
        {
          props: [false, 1, 1],
        },
        {
          props: [false, '2', '2'],
        },
      ];

      testCases.forEach(({ props }) => {
        const actual = getIsFluid(...props);

        expect(actual).toEqual(false);
      });
    });
  });
});
