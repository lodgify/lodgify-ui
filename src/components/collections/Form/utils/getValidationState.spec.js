jest.mock('./getValidationWithDefaults');
jest.mock('./getIsValidError');

import { getValidationState } from './getValidationState';
import { getValidationWithDefaults } from './getValidationWithDefaults';
import { getIsValidError } from './getIsValidError';

const getIsValid = jest.fn();
const invalidMessage = 'some message';
const validation = { some: 'validation' };

getValidationWithDefaults.mockReturnValue({
  getIsValid,
  invalidMessage,
  ...validation,
});

describe('getValidationState', () => {
  it('should call `getValidationWithDefaults` with the right arguments', () => {
    const inputValidation = 'some validation';

    getValidationState(inputValidation);

    expect(getValidationWithDefaults).toHaveBeenCalledWith(inputValidation);
  });

  it('should call `getIsValid` with the right arguments', () => {
    const inputValue = 'some value';

    getValidationState(undefined, inputValue);

    expect(getIsValid).toHaveBeenCalledWith(inputValue);
  });

  it('should call `getIsValidError` with the right arguments', () => {
    const inputValue = 'some other value';
    const isValid = 'some valid isness';

    getIsValid.mockReturnValueOnce(isValid);

    getValidationState(undefined, inputValue);

    expect(getIsValidError).toHaveBeenCalledWith(
      inputValue,
      isValid,
      invalidMessage
    );
  });

  it('should return the right object', () => {
    const isValid = 'some other valid isness';
    const error = 'some error';

    getIsValid.mockReturnValueOnce(isValid);
    getIsValidError.mockReturnValueOnce(error);

    const actual = getValidationState();

    expect(actual).toEqual({
      error,
      isValid,
    });
  });
});
