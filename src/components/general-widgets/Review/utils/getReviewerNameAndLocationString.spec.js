import { getReviewerNameAndLocationString } from './getReviewerNameAndLocationString';

describe('getReviewerNameAndLocationString', () => {
  it('should return a string composed from the`reviewerLocation` and `reviewerName` arguments', () => {
    const reviewerLocation = 'someLabel';
    const reviewerName = '🚣';
    const actual = getReviewerNameAndLocationString(
      reviewerLocation,
      reviewerName
    );

    expect(actual).toBe(`${reviewerLocation} (${reviewerName})`);
  });
});
