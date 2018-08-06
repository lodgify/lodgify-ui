import { getRoomTypeDescription } from './getRoomTypeDescription';

describe('getRoomTypeDescription', () => {
  it('should return a string composed from the `guestsNumber` and `bedsNumber` arguments', () => {
    const guestsNumber = 10;
    const bedsNumber = 31;
    const actual = getRoomTypeDescription(guestsNumber, bedsNumber);

    expect(actual).toBe(`Guests: ${guestsNumber} | Beds: ${bedsNumber}`);
  });
});
