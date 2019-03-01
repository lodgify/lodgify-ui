/**
 * @param  {string} reviewerLocation
 * @param  {string} reviewerName
 * @return {string}
 */
export const getReviewerNameAndLocationString = (
  reviewerLocation,
  reviewerName
) => `${reviewerLocation} (${reviewerName})`;
