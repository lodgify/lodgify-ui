import { getReviewerNameAndLocationString } from './getReviewerNameAndLocationString';

//TODO merge this and getQuoteSourceUtil
describe('getReviewerNameAndLocationString', () => {
  it('should return a string composed from the `reviewerName` and `reviewerLocation` arguments', () => {
    const reviewerName = '🚣';
    const reviewerLocation = 'someLabel';
    const actual = getReviewerNameAndLocationString(
      reviewerName,
      reviewerLocation
    );
    expect(actual).toBe(`${reviewerName} (${reviewerLocation})`);
  });
});
