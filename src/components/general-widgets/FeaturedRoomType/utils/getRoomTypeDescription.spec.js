import { getRoomTypeDescription } from './getRoomTypeDescription';

describe('getRoomTypeDescription', () => {
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
