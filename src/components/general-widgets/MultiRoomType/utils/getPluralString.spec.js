import { getPluralString } from './getPluralString';

describe('getPropertyDescription', () => {
  it('should return the right string', () => {
    const amount = 2;
    const single = 'singleSingle';
    const plural = 'pluralSingle';
    const actual = getPluralString(amount, single, plural);
    expect(actual).toBe(`${amount} ${plural}`);
  });
});
