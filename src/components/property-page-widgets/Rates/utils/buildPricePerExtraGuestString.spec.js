import { buildPricePerExtraGuestString } from './buildPricePerExtraGuestString';

describe('buildPricePerExtraGuestString', () => {
  it('should return a string composed of the `cost` and ` / Price Per extra per.`', () => {
    const cost = '🤞';
    const actual = buildPricePerExtraGuestString(cost);

    expect(actual).toBe(`${cost} / Price Per extra per.`);
  });
});
