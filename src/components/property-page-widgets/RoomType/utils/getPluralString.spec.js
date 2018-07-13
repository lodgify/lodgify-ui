import { getPluralString } from './getPluralString';

describe('getPropertyDescription', () => {
  it('should return the right string if `amount === 1`', () => {
    const amount = 1;
    const single = 'singleSingle';
    const plural = 'pluralSingle';
    const actual = getPluralString(amount, single, plural);
    expect(actual).toBe(`${amount} ${single}`);
  });

  it('should return a the right string if `amount !== 1` ', () => {
    const amount = 2;
    const single = 'singleSingle';
    const plural = 'pluralSingle';
    const actual = getPluralString(amount, single, plural);
    expect(actual).toBe(`${amount} ${plural}`);
  });
});
