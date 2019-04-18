import { DEFAULT_IS_REQUIRED_MESSAGE } from '../constants';

import { getValidationWithDefaults } from './getValidationWithDefaults';

describe('getValidationWithDefaults', () => {
  describe('if `validation` is `undefined`', () => {
    it('should not break', () => {
      expect(() => getValidationWithDefaults(undefined)).not.toThrow();
    });
  });

  it('should set defaults for `getIsEmpty`, `getIsValid` and `isRequiredMessage`', () => {
    const actual = getValidationWithDefaults(undefined);

    expect(actual).toEqual(
      expect.objectContaining({
        getIsEmpty: expect.any(Function),
        getIsValid: expect.any(Function),
        isRequiredMessage: DEFAULT_IS_REQUIRED_MESSAGE,
      })
    );
  });

  it('should set defaults for `isRequiredMessage` if an empty string is passed', () => {
    const actual = getValidationWithDefaults({
      isRequiredMessage: '',
    });

    expect(actual).toEqual(
      expect.objectContaining({
        isRequiredMessage: DEFAULT_IS_REQUIRED_MESSAGE,
      })
    );
  });

  it('should pass through other properties', () => {
    const getIsEmpty = 'some function';
    const isRequiredMessage = '💁';
    const another = 'value';
    const actual = getValidationWithDefaults({
      getIsEmpty,
      isRequiredMessage,
      another,
    });

    expect(actual).toEqual({
      getIsEmpty,
      getIsValid: expect.any(Function),
      isRequiredMessage,
      another,
    });
  });

  describe('getIsEmpty', () => {
    const validationDefaults = getValidationWithDefaults();

    it('should return true if is empty', () => {
      const actual = validationDefaults.getIsEmpty('');

      expect(actual).toBe(true);
    });

    it('should return false if the value is not empty', () => {
      const actual = validationDefaults.getIsEmpty('🏝');

      expect(actual).toBe(false);
    });

    it('should return false if the value is `0`', () => {
      const actual = validationDefaults.getIsEmpty('0');

      expect(actual).toBe(false);
    });
  });
});
