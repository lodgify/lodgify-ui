import { getButtonProps } from './getButtonProps';

describe('`getButtonProps`', () => {
  it('should return an object of the correct shape if passed `true`', () => {
    const actual = getButtonProps(true);

    expect(actual).toEqual({
      role: 'button',
      tabIndex: 0,
    });
  });

  it('should return an empty object if passed `false`', () => {
    const actual = getButtonProps(false);

    expect(actual).toEqual({});
  });
});
