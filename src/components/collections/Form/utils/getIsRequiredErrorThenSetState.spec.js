import { DEFAULT_IS_REQUIRED_MESSAGE } from '../constants';

import { getIsRequiredErrorThenSetState } from './getIsRequiredErrorThenSetState';

describe('getIsRequiredErrorThenSetState', () => {
  describe('if there is an `is required` type error', () => {
    it('should set the error to component state and return true', () => {
      const name = '🐸';
      const value = '';
      const fieldValidation = {
        isRequired: true,
      };
      const setState = jest.fn();

      const hasError = getIsRequiredErrorThenSetState(
        setState,
        fieldValidation,
        name,
        value
      );

      expect(setState).toBeCalledWith({
        [name]: {
          error: DEFAULT_IS_REQUIRED_MESSAGE,
        },
      });
      expect(hasError).toBe(true);
    });
  });

  describe('if the field is not empty', () => {
    it('should not set the state and return false', () => {
      const name = '🐸';
      const value = 'defined';
      const fieldValidation = {
        isRequired: true,
        getIsEmpty: () => false,
      };
      const setState = jest.fn();

      const hasError = getIsRequiredErrorThenSetState(
        setState,
        fieldValidation,
        name,
        value
      );

      expect(hasError).toBe(false);
      expect(setState).not.toBeCalled();
    });
  });
});
