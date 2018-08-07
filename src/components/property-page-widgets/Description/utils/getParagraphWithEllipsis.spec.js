import { getParagraphWithEllipsis } from './getParagraphWithEllipsis';

describe(`getParagraphWithEllipsis`, () => {
  it('should return the right string', () => {
    const testCase = 'yoyoyoyoyoyo.';
    const actual = getParagraphWithEllipsis(testCase);

    expect(actual).toBe('yoyoyoyoyoyo...');
  });
});
