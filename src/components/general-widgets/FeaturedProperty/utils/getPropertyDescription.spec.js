import { getPropertyDescription } from './getPropertyDescription';

describe('getPropertyDescription', () => {
  it('should return a string composed from the `guestsNumber` and `bedroomsNumber` arguments', () => {
    const guestsNumber = 10;
    const bedroomsNumber = 31;
    const actual = getPropertyDescription(guestsNumber, bedroomsNumber);

    expect(actual).toBe(
      `Guests: ${guestsNumber} | Bedrooms: ${bedroomsNumber}`
    );
  });

  describe('if `bedroomsNumber` is falsy', () => {
    it('should return a string composed from the `guestsNumber` only', () => {
      const guestsNumber = 10;
      const bedroomsNumber = null;
      const actual = getPropertyDescription(guestsNumber, bedroomsNumber);

      expect(actual).toBe(`Guests: ${guestsNumber}`);
    });
  });
});
