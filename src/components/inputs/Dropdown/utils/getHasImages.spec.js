import { getHasImages } from './getHasImages';

describe('getHasImages', () => {
  it('should return `true` if object has `imageUrl` property', () => {
    const options = [
      { value: 'firstValue', imageUrl: '/yoyo/' },
      { value: 'secondValue' },
    ];
    const actual = getHasImages(options);

    expect(actual).toBe(true);
  });

  it('should return `false` if object doesnt have `imageUrl` property', () => {
    const options = [{ value: 'firstYoValue' }, { value: 'secondYoValue' }];
    const actual = getHasImages(options);

    expect(actual).toBe(false);
  });
});
