import { getReviewerCategoryAndStayDateString } from './getReviewerCategoryAndStayDateString';

describe('getReviewerCategoryAndStayDateString', () => {
  it('should return a string composed from the `reviewerCategory` and `reviewerStayDate` arguments', () => {
    const reviewerCategory = 'someMarritalStatus';
    const reviewerStayDate = '10/2020';
    const actual = getReviewerCategoryAndStayDateString(
      reviewerCategory,
      reviewerStayDate
    );

    expect(actual).toContain(reviewerCategory);
    expect(actual).toContain(reviewerStayDate);
  });
  it("shouldn't return a separator if reviewerStaysDate is missing", () => {
    const reviewerCategory = 'someMarritalStatus';
    const actual = getReviewerCategoryAndStayDateString(reviewerCategory);

    expect(actual).not.toContain('|');
  });
  it("shouldn't return a separator if reviewerCategory is missing", () => {
    const reviewerStayDate = 'someMarritalStatus';
    const actual = getReviewerCategoryAndStayDateString(
      undefined,
      reviewerStayDate
    );

    expect(actual).not.toContain('|');
  });
});
