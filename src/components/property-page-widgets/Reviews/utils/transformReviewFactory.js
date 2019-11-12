export const transformReviewFactory = ({
  stayDatePrefix = undefined,
} = {}) => ({ reviewerStayDate, ...otherFields }) => ({
  ...otherFields,
  reviewerStayDate: reviewerStayDate
    ? stayDatePrefix
      ? `${stayDatePrefix} ${reviewerStayDate}`
      : reviewerStayDate
    : reviewerStayDate,
});
