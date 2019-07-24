import { getOptionsWithSearch } from './getOptionsWithSearch';

describe('getOptionsWithSearch', () => {
  it('should return the right array', () => {
    const options = [
      { name: 'AA', value: 'some value' },
      { name: 'AB', value: 'some value' },
      { name: 'CC', value: 'abkhazia' },
      { name: 'DD', value: 'absent minded' },
      { name: 'EE', value: 'some value' },
    ];

    const actual = getOptionsWithSearch(options, 'ab');

    expect(actual).toMatchSnapshot();
  });
});
