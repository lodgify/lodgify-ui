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
        getIsValid: Function.prototype,
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
      getIsValid: Function.prototype,
      isRequiredMessage,
      another,
    });
  });
});
