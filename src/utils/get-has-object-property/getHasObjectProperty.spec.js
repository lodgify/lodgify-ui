import { getHasObjectProperty } from './getHasObjectProperty';

describe('getHasObjectProperty', () => {
  it('should return `true` if the object has the required property', () => {
    const options = [
      { value: 'firstValue', label: '/yoyo/' },
      { value: 'secondValue' },
    ];
    const actual = getHasObjectProperty(options, 'label');

    expect(actual).toBe(true);
  });

  it('should return `false` if the object does not have the required property', () => {
    const options = [{ value: 'firstValue' }, { value: 'secondValue' }];
    const actual = getHasObjectProperty(options, 'label');

    expect(actual).toBe(false);
  });
});
