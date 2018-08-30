import { getEmptyRequiredInputs } from './getEmptyRequiredInputs';

describe('getEmptyRequiredInputs', () => {
  it('should return the right subset', () => {
    const inputsValidation = {
      one: {},
      two: { isRequired: true },
      three: { isRequired: true },
    };
    const inputsState = {
      one: {},
      two: { value: '🐶' },
      three: {},
    };
    const actual = getEmptyRequiredInputs(inputsValidation, inputsState);

    expect(actual).toEqual({ three: { isRequired: true } });
  });
});
