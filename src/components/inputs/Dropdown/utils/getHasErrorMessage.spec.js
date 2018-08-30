import { getHasErrorMessage } from './getHasErrorMessage';

describe('getHasErrorMessage', () => {
  it('should return `false` if error is `false` or falsy string', () => {
    const errors = [false, ''];

    errors.forEach(error => {
      const actual = getHasErrorMessage(error);

      expect(actual).toBe(false);
    });
  });

  it('should return `true` if error is a non-empty string', () => {
    const actual = getHasErrorMessage('some string');

    expect(actual).toBe(true);
  });
});
