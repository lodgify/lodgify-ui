import { getSearchResultDescription } from './getSearchResultDescription';

describe('`getPropertyDescription`', () => {
  it('should return the right string', () => {
    const guestsNumber = 2;
    const guestsText = 'guests';
    const bedroomsNumber = null;
    const bedroomsText = '';
    const bedsNumber = 2;
    const bedsText = 'beds';
    const bathsNumber = 2;
    const bathsText = 'baths';

    const actual = getSearchResultDescription(
      bathsNumber,
      bathsText,
      bedroomsNumber,
      bedroomsText,
      bedsNumber,
      bedsText,
      guestsNumber,
      guestsText
    );

    expect(actual).toBe('2 guests · 2 beds · 2 baths');
  });
});
