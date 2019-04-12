import { mapValueToProps } from './mapValueToProps';

describe('mapValueToProps', () => {
  it('should return the right shape', () => {
    const value = true;
    const actual = mapValueToProps(value);

    expect(actual).toEqual({
      checked: value,
    });
  });
});
