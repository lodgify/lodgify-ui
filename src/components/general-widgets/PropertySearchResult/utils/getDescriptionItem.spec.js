import { getDescriptionItem } from './getDescriptionItem';

describe('`getDescriptionItem`', () => {
  describe('if itemNumber is falsy', () => {
    it('should return an empty string', () => {
      const itemNumber = undefined;
      const itemText = 'praise';

      const actual = getDescriptionItem(itemNumber, itemText);

      expect(actual).toBe('');
    });
  });

  describe('if itemNumber is truthy', () => {
    it('should return the right string', () => {
      const itemNumber = 2;
      const itemText = 'bed';

      const actual = getDescriptionItem(itemNumber, itemText);

      expect(actual).toBe(' · 2 bed');
    });
  });
});
