import { getLowestCommonDenominator } from './getLowestCommonDenominator';

describe('`getLowestCommonDenominator`', () => {
  it('should return the right value', () => {
    const actual = getLowestCommonDenominator(1, 4);

    expect(actual).toMatchSnapshot();
  });
});
