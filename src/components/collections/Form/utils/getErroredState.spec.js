jest.mock('./getValidationWithDefaults');
jest.mock('./getIsRequiredError');
jest.mock('./getIsValidError');

import { getErroredState } from './getErroredState';
import { getValidationWithDefaults } from './getValidationWithDefaults';
import { getIsRequiredError } from './getIsRequiredError';
import { getIsValidError } from './getIsValidError';

const IS_REQUIRED_MESSAGE = '😈';
const IS_REQUIRED = '👿';
const INVALID_MESSAGE = '👹';
const getIsValid = jest.fn();
const getIsEmpty = jest.fn();

const VALIDATION_WITH_DEFAULTS = {
  isRequiredMessage: IS_REQUIRED_MESSAGE,
  isRequired: IS_REQUIRED,
  invalidMessage: INVALID_MESSAGE,
  getIsValid,
  getIsEmpty,
};
const IS_VALID_ERROR_MESSAGE = '👾';

getValidationWithDefaults.mockReturnValue(VALIDATION_WITH_DEFAULTS);
getIsValidError.mockReturnValue(IS_VALID_ERROR_MESSAGE);

const inputValidation = {
  isRequired: true,
};

const inputState = {
  value: '1',
};

describe('getErroredState', () => {
  it('should call `getValidationWithDefaults` with the correct arguments', () => {
    getErroredState(inputValidation, inputState);
    expect(getValidationWithDefaults).toHaveBeenCalledWith(inputValidation);
  });

  it('should call `getIsRequiredError` with the right arguments', () => {
    getErroredState(inputValidation, inputState);
    expect(getIsRequiredError).toHaveBeenCalledWith(
      {
        isRequired: IS_REQUIRED,
        getIsEmpty,
      },
      inputState,
      IS_REQUIRED_MESSAGE
    );
  });

  it('should call `getIsEmpty` and `getIsValid` with the correct argument', () => {
    getErroredState(inputValidation, inputState);
    expect(getIsEmpty).toHaveBeenCalledWith(inputState.value);
    expect(getIsValid).toHaveBeenCalledWith(inputState.value);
  });

  it('should call `getIsValidError` with the correct arguments', () => {
    getIsValid.mockClear();
    getIsValid.mockReturnValue(true);
    getErroredState(inputValidation, inputState);

    expect(getIsValidError).toHaveBeenCalledWith(
      inputState.value,
      true,
      INVALID_MESSAGE
    );
  });

  describe('if `isRequiredError` is truthy', () => {
    it('should return the right object', () => {
      getIsRequiredError.mockReturnValue(true);
      getIsValid.mockReturnValue(false);
      const actual = getErroredState(inputValidation, inputState);

      expect(actual).toEqual({
        ...inputState,
        isValid: false,
        error: IS_REQUIRED_MESSAGE,
      });
    });
  });

  describe('if `isRequiredError` is falsy', () => {
    it('should return the right object', () => {
      getIsRequiredError.mockReturnValue(false);
      const actual = getErroredState(inputValidation, inputState);

      expect(actual).toEqual({
        ...inputState,
        isValid: false,
        error: IS_VALID_ERROR_MESSAGE,
      });
    });
  });
});
