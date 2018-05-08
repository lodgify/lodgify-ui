import { getParagraphsFromStrings } from './getParagraphsFromStrings';

const before = `
  Paragraph one.

  Paragraph two.

  Paragraph three.
`;

const after = ['Paragraph one.', 'Paragraph two.', 'Paragraph three.'];

describe('getParagraphsFromStrings', () => {
  it('should return an array of the paragraphs in strings', () => {
    const actual = getParagraphsFromStrings(before);
    expect(actual).toEqual(after);
  });

  it('should accept multiple strings and return a single array', () => {
    const actual = getParagraphsFromStrings(before, before, before);
    expect(actual).toEqual([...after, ...after, ...after]);
  });
});
