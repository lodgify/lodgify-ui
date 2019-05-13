import { size } from './size';

describe('size', () => {
  describe('when passed a string', () => {
    it('should return the correct value', () => {
      const actual = size('hello');

      expect(actual).toBe(5);
    });
  });

  describe('when passed an array', () => {
    it('should return the correct value', () => {
      const actual = size(['hello', 'bro']);

      expect(actual).toBe(2);
    });
  });

  describe('when passed an object', () => {
    it('should return the correct value', () => {
      const actual = size({ language: 'EN', greeting: 'hello' });

      expect(actual).toBe(2);
    });
  });

  describe('in all other cases', () => {
    it('should return the correct value', () => {
      const actual = size(undefined);

      expect(actual).toBe(0);
    });
  });
});
