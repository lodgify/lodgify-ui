import { getEllipsis } from './getEllipsis';

const sentenceWithFullStop = 'Lorem.';
const sentenceWithoutFullStop = 'Ipsum';

describe('the getEllipsis util', () => {
  it('should return `..` when evaluates to true', () => {
    const actual = getEllipsis(sentenceWithFullStop);

    expect(actual).toBe('..');
  });
  it('should return `...` when evaluates to false', () => {
    const actual = getEllipsis(sentenceWithoutFullStop);

    expect(actual).toBe('...');
  });
});
