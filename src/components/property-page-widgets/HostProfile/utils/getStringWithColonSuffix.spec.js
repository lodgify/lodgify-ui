import { getStringWithColonSuffix } from './getStringWithColonSuffix';

describe('`getStringWithColonSuffix`', () => {
  it('should return the right string', () => {
    const string = '🏰';
    const actual = getStringWithColonSuffix(string);

    expect(actual).toBe(`${string}: `);
  });
});
