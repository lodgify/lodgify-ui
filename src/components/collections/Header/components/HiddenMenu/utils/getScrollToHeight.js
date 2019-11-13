/**
 * @param  {number} currentScrollHeight
 * @param  {number} bottomOfActiveAccordionItem
 * @return {number}
 */
export const getScrollToHeight = (
  currentScrollHeight,
  bottomOfActiveAccordionItem
) => {
  const amountToScrollBy = bottomOfActiveAccordionItem - global.innerHeight;

  return currentScrollHeight + amountToScrollBy;
};
