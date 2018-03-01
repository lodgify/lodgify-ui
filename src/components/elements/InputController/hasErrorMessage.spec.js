import { hasErrorMessage } from './hasErrorMessage';

describe('hasErrorMessage', () => {
  it('should return `false` if error is `false` or falsy string', () => {
    const errors = [false, ''];
    errors.forEach(error => {
      const actual = hasErrorMessage(error);
      expect(actual).toBe(false);
    });
  });

  it('should return `true` if error is a non-empty string', () => {
    const actual = hasErrorMessage('some string');
    expect(actual).toBe(true);
  });
});
