import { getReviewerNameAndLocationString } from './getReviewerNameAndLocationString';

//TODO merge this and getQuoteSourceUtil
describe('getReviewerNameAndLocationString', () => {
  it('should return a string composed from the `reviewerName` and `reviewerLocation` arguments', () => {
    const reviewerLocation = 'someLabel';
    const reviewerName = '🚣';
    const actual = getReviewerNameAndLocationString(
      reviewerLocation,
      reviewerName
    );
    expect(actual).toBe(`${reviewerName} (${reviewerLocation})`);
  });
});
