import { getReviewerCategoryAndStayDateString } from './getReviewerCategoryAndStayDateString';

describe('getReviewerCategoryAndStayDateString', () => {
  it('should return a string composed from the `reviewerCategory` and `reviewerStayDate` arguments', () => {
    const reviewerCategory = 'someMarritalStatus';
    const reviewerStayDate = '10/2020';
    const actual = getReviewerCategoryAndStayDateString(
      reviewerCategory,
      reviewerStayDate
    );
    expect(actual).toBe(`${reviewerCategory} | stayed in ${reviewerStayDate}`);
  });
});
