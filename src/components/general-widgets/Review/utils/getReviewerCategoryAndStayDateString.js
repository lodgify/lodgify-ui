/**
 * @param  {string} reviewerCategory
 * @param  {string} reviewerStayDate
 * @return {string}
 */
export const getReviewerCategoryAndStayDateString = (
  reviewerCategory,
  reviewerStayDate
) => `${reviewerCategory} ${reviewerStayDate ? `| ${reviewerStayDate}` : ''}`;
