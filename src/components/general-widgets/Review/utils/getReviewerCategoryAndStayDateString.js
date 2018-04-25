/**
 * @param  {String} reviewerCategory
 * @param  {String} reviewerStayDate
 * @return {String}
 */
export const getReviewerCategoryAndStayDateString = (
  reviewerCategory,
  reviewerStayDate
) => `${reviewerCategory} | stayed in ${reviewerStayDate}`;
