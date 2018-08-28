import { buildPricePerExtraGuestString } from './buildPricePerExtraGuestString';

describe('buildPricePerExtraGuestString', () => {
  it('should return a string composed of the `cost` and ` / Price Per extra per.`', () => {
    const cost = '🤞';
    const pricePerExtraText = 'A';
    const actual = buildPricePerExtraGuestString(cost, pricePerExtraText);

    expect(actual).toBe(`${cost} / A`);
  });
});
