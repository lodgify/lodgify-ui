import { getAspectRatioAsPercentage } from './getAspectRatioAsPercentage';

describe('`getAspectRatioAsPercentage`', () => {
  describe('if both arguments are numbers', () => {
    it('should return the right value', () => {
      const actual = getAspectRatioAsPercentage(1280, 720);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if width is not a number', () => {
    it('should return the right value', () => {
      const actual = getAspectRatioAsPercentage('not', 720);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if height is not a number', () => {
    it('should return the right value', () => {
      const actual = getAspectRatioAsPercentage(1280, 'a');

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if both arguments are not numbers', () => {
    it('should return the right value', () => {
      const actual = getAspectRatioAsPercentage('number', 'lol');

      expect(actual).toMatchSnapshot();
    });
  });
});
