/**
 * @param  {String} reviewerName
 * @param  {String} reviewerLocation
 * @return {String}
 */
export const getReviewerNameAndLocationString = (
  reviewerLocation,
  reviewerName
) => `${reviewerName} (${reviewerLocation})`;
