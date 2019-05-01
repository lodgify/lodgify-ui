import { getLocationDescription } from './getLocationDescription';

describe('getLocationDescription', () => {
  describe('if passed a string containing HTML elements', () => {
    it('should render the right structure', () => {
      const actual = getLocationDescription('<a>linky boi</b>');

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if passed a string that doesnt contain any HTML elements', () => {
    it('should render the right structure', () => {
      const actual = getLocationDescription('vanilla string boi');

      expect(actual).toMatchSnapshot();
    });
  });
});
