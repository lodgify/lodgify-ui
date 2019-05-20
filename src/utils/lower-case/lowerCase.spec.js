import { lowerCase } from './lowerCase';

describe('lowerCase', () => {
  describe('if typeof `stringToLowerCase` equals a string', () => {
    it('should return the correct value', () => {
      const actual = lowerCase('LOL');

      expect(actual).toEqual('lol');
    });
  });

  describe('if typeof `stringToLowerCase` does not equal a string', () => {
    it('should return the correct value', () => {
      const actual = lowerCase(1);

      expect(actual).toEqual(undefined);
    });
  });
});
