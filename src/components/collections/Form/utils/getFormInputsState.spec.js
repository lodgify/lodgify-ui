jest.mock('fast-deep-equal');
jest.mock('./getErroredState');
jest.mock('./setInputState');

import isEqual from 'fast-deep-equal';

import { getErroredState } from './getErroredState';
import { setInputState } from './setInputState';
import { getFormInputsState } from './getFormInputsState';

const ERRORED_STATE = '⚠';

getErroredState.mockImplementation(() => ERRORED_STATE);

const inputName = 'someName';
const setState = jest.fn();
const form = {
  state: {},
  props: {
    validation: {
      [inputName]: {},
    },
  },
  setState,
};

describe('getFormInputsState', () => {
  describe('if `previousInputState` and `inputState` are equal', () => {
    it('should call `isEqual` with the `previousInputState` and `inputState`', () => {
      const previousInputState = {
        value: '1',
      };
      const inputState = previousInputState;

      getFormInputsState(form, inputName, inputState, previousInputState);

      expect(isEqual).toHaveBeenCalledWith(previousInputState, inputState);
    });

    it('should return `undefined', () => {
      isEqual.mockReturnValueOnce(true);
      const actual = getFormInputsState();

      expect(actual).toBe(undefined);
    });
  });

  describe('if `previousInputState.isBlurred` is false and `inputState.isBlurred` is true', () => {
    const inputState = { isBlurred: true, value: '1' };
    const previousInputState = { isBlurred: false };

    it('should call `getErroredState` with the correct arguments', () => {
      getFormInputsState(form, inputName, inputState, previousInputState);

      expect(getErroredState).toHaveBeenCalledWith(
        form.props.validation[inputName],
        inputState
      );
    });

    it('should call `setInputState` with the correct arguments', () => {
      getFormInputsState(form, inputName, inputState, previousInputState);

      expect(setInputState).toHaveBeenCalledWith(
        form,
        inputName,
        ERRORED_STATE
      );
    });

    it('should return `undefined', () => {
      const actual = getFormInputsState(
        form,
        inputName,
        inputState,
        previousInputState
      );

      expect(actual).toBe(undefined);
    });
  });

  describe('if `inputState.isBlurred` is true and `previousInputState.value` !== `inputState.value`', () => {
    const inputState = { isBlurred: true, value: '1' };
    const previousInputState = { value: '2', isBlurred: true };

    it('should call `getErroredState` with the correct arguments', () => {
      getFormInputsState(form, inputName, inputState, previousInputState);

      expect(getErroredState).toHaveBeenCalledWith(
        form.props.validation[inputName],
        inputState
      );
    });

    it('should call `setInputState` with the correct arguments', () => {
      getFormInputsState(form, inputName, inputState, previousInputState);

      expect(setInputState).toHaveBeenCalledWith(
        form,
        inputName,
        ERRORED_STATE
      );
    });

    it('should return `undefined', () => {
      const actual = getFormInputsState(
        form,
        inputName,
        inputState,
        previousInputState
      );

      expect(actual).toBe(undefined);
    });
  });

  describe('if `previousInputState.value` !== `inputState.value`', () => {
    it('should call `setInputState` with the correct arguments', () => {
      const inputState = { value: '2' };
      const previousInputState = {
        value: '1',
      };

      getFormInputsState(form, inputName, inputState, previousInputState);

      expect(setInputState).toHaveBeenCalledWith(
        form,
        inputName,
        ERRORED_STATE
      );
    });

    it('should return `undefined', () => {
      isEqual.mockReturnValueOnce(true);
      const actual = getFormInputsState();

      expect(actual).toBe(undefined);
    });
  });

  describe('by default', () => {
    it('should return `undefined', () => {
      isEqual.mockReturnValueOnce(true);
      const actual = getFormInputsState();

      expect(actual).toBe(undefined);
    });
  });
});
