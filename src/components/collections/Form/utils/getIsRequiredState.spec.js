jest.mock('./getValidationWithDefaults');
jest.mock('./getIsRequiredError');

import { getIsRequiredState } from './getIsRequiredState';
import { getValidationWithDefaults } from './getValidationWithDefaults';
import { getIsRequiredError } from './getIsRequiredError';

const isRequiredMessage = 'some message';
const validation = { some: 'validation' };

getValidationWithDefaults.mockReturnValue({ isRequiredMessage, ...validation });

describe('getIsRequiredState', () => {
  it('should call `getValidationWithDefaults` with the right arguments', () => {
    const inputValidation = 'some validation';

    getIsRequiredState(inputValidation);

    expect(getValidationWithDefaults).toHaveBeenCalledWith(inputValidation);
  });

  it('should call `getIsRequiredError` with the right arguments', () => {
    const inputState = 'some state';

    getIsRequiredState(undefined, inputState);

    expect(getIsRequiredError).toHaveBeenCalledWith(validation, inputState);
  });

  describe('if `getIsRequiredError` returns `false`', () => {
    it('should return the right object', () => {
      getIsRequiredError.mockReturnValueOnce(false);

      const actual = getIsRequiredState();

      expect(actual).toEqual({
        error: undefined,
      });
    });
  });

  describe('if `getIsRequiredError` returns `true`', () => {
    it('should return the right object', () => {
      getIsRequiredError.mockReturnValueOnce(true);

      const actual = getIsRequiredState();

      expect(actual).toEqual({
        error: isRequiredMessage,
      });
    });
  });
});
