import { getCostPerExtraGuestString } from './getCostPerExtraGuestString';

describe('getCostPerExtraGuestString', () => {
  it('should return a string composed of the `cost` and ` / Price Per extra per.`', () => {
    const cost = '🤞';
    const costPerExtraGuestLabel = 'A';
    const actual = getCostPerExtraGuestString(cost, costPerExtraGuestLabel);

    expect(actual).toBe(`${cost} / A`);
  });
});
