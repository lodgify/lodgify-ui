import { getReviewerNameAndLocationString } from './getReviewerNameAndLocationString';

describe('getReviewerNameAndLocationString', () => {
  it('should return a string composed from the`reviewerLocation` and `reviewerName` arguments', () => {
    const reviewerLocation = 'someLabel';
    const reviewerName = '🚣';
    const actual = getReviewerNameAndLocationString(
      reviewerName,
      reviewerLocation
    );

    expect(actual).toContain(reviewerLocation);
    expect(actual).toContain(reviewerName);
  });
  it("should' return parenthesis if the location is missing", () => {
    const reviewerName = '🚣';
    const actual = getReviewerNameAndLocationString(reviewerName);

    expect(actual).not.toContain('(');
    expect(actual).not.toContain(')');
  });
});
