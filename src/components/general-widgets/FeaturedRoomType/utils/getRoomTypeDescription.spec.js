import { getRoomTypeDescription } from './getRoomTypeDescription';

describe('getRoomTypeDescription', () => {
  describe('if there is no `guestsNumber`', () => {
    it('should return a string composed from the bedsLabel` and `bedsNumber` arguments', () => {
      const bedsLabel = 'up';
      const bedsNumber = 31;
      const actual = getRoomTypeDescription(
        undefined,
        undefined,
        bedsLabel,
        bedsNumber
      );

      expect(actual).toBe(`${bedsLabel}: ${bedsNumber}`);
    });
  });

  describe('if there is no `bedsNumber`', () => {
    it('should return a string composed from the `guestsLabel` and `guestsNumber` arguments', () => {
      const guestsLabel = 'word';
      const guestsNumber = 10;
      const actual = getRoomTypeDescription(
        guestsLabel,
        guestsNumber,
        undefined,
        undefined
      );

      expect(actual).toBe(`${guestsLabel}: ${guestsNumber}`);
    });
  });

  describe('if there is no `guestsNumber` or `bedsNumber`', () => {
    it('should return null', () => {
      const actual = getRoomTypeDescription();

      expect(actual).toBe(null);
    });
  });

  describe('if there is both `guestsNumber` and `bedsNumber`', () => {
    it('should return a string composed from the `guestsLabel`, `guestsNumber`, `bedsLabel` and `bedsNumber` arguments', () => {
      const guestsLabel = 'word';
      const guestsNumber = 10;
      const bedsLabel = 'up';
      const bedsNumber = 31;
      const actual = getRoomTypeDescription(
        guestsLabel,
        guestsNumber,
        bedsLabel,
        bedsNumber
      );

      expect(actual).toBe(
        `${guestsLabel}: ${guestsNumber} | ${bedsLabel}: ${bedsNumber}`
      );
    });
  });
});
