/**
 * @param  {string} reviewerName
 * @param  {string} reviewerLocation
 * @return {string}
 */
export const getReviewerNameAndLocationString = (
  reviewerName,
  reviewerLocation
) => `${reviewerName} ${reviewerLocation ? `(${reviewerLocation})` : ``}`;
