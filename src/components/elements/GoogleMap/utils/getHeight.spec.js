import { getHeight } from './getHeight';

describe('getHeight', () => {
  describe('if `isFullBleed` or `isFluid` is `true`', () => {
    it('should return `100%`', () => {
      const testCases = [[true, false], [false, true], [true, true]];

      testCases.forEach(([isFullBleed, isFluid]) => {
        const actual = getHeight('some height', isFullBleed, isFluid);

        expect(actual).toBe('100%');
      });
    });
  });

  describe('if `isFullBleed` and `isFluid` are `false`', () => {
    it('should return `height`', () => {
      const height = 'the height';
      const actual = getHeight(height, false, false);

      expect(actual).toBe(height);
    });
  });
});
