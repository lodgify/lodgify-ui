import { getHasIndentedOptions } from './getHasIndentedOptions';

describe('getHasIndentedOptions', () => {
  it('should return `true` if object has `indent` property', () => {
    const options = [
      { value: 'firstValue', indent: '/yoyo/' },
      { value: 'secondValue' },
    ];
    const actual = getHasIndentedOptions(options);

    expect(actual).toBe(true);
  });

  it('should return `false` if object doesnt have `image` property', () => {
    const options = [{ value: 'firstYoValue' }, { value: 'secondYoValue' }];
    const actual = getHasIndentedOptions(options);

    expect(actual).toBe(false);
  });
});
