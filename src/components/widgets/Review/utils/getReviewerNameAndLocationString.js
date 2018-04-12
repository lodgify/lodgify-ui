/**
 * @param  {String} reviewerName
 * @param  {String} reviewerLocation
 * @return {String}
 */
export const getReviewerNameAndLocationString = (
  reviewerName,
  reviewerLocation
) => `${reviewerName} (${reviewerLocation})`;
