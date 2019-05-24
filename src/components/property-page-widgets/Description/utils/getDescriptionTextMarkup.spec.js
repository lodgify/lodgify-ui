import { getDescriptionTextMarkup } from './getDescriptionTextMarkup';

describe('getDescriptionTextMarkup', () => {
  describe('if `descriptionText` has more than 100 words', () => {
    it('should return the right shape', () => {
      const descriptionText = Array(101)
        .fill('yo')
        .join(' ');
      const actual = getDescriptionTextMarkup(
        descriptionText,
        'some button text'
      );

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `descriptionText` has fewer than 100 words', () => {
    it('should return the right shape', () => {
      const descriptionText = Array(99)
        .fill('yo')
        .join(' ');
      const actual = getDescriptionTextMarkup(
        descriptionText,
        'some button text'
      );

      expect(actual).toMatchSnapshot();
    });
  });
});
