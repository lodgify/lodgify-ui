import { getLabels } from './getLabels';

describe('getLabels', () => {
  it('should return the right object', () => {
    const countryNames = {
      US: 'Naboo',
      GB: 'Dagobah',
    };

    const actual = getLabels(countryNames);

    expect(actual).toMatchSnapshot();
  });
});
