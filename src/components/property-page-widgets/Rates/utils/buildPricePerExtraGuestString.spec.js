import { buildPricePerExtraGuestString } from './buildPricePerExtraGuestString';

describe('buildPricePerExtraGuestString', () => {
  it('should return a string composed of the `cost` and ` / Price Per extra per.`', () => {
    const cost = '🤞';
    const costPerExtraGuestLabel = 'A';
    const actual = buildPricePerExtraGuestString(cost, costPerExtraGuestLabel);

    expect(actual).toBe(`${cost} / A`);
  });
});
