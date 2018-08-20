import { getValidationWithDefaults } from './getValidationWithDefaults';

describe('getValidationWithDefaults', () => {
  describe('if `validation` is `undefined`', () => {
    it('should not break', () => {
      expect(() => getValidationWithDefaults(undefined)).not.toThrow();
    });
  });

  it('should set defaults for `getIsEmpty` and `getIsValid`', () => {
    const actual = getValidationWithDefaults(undefined);

    expect(actual).toEqual(
      expect.objectContaining({
        getIsEmpty: expect.any(Function),
        getIsValid: Function.prototype,
      })
    );
  });

  it('should pass through other properties', () => {
    const getIsEmpty = 'some function';
    const another = 'value';
    const actual = getValidationWithDefaults({
      getIsEmpty,
      another,
    });

    expect(actual).toEqual({
      getIsEmpty,
      getIsValid: Function.prototype,
      another,
    });
  });
});
