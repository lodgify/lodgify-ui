/**
 * @param  {Object} activeAccordionItem
 * @return {boolean}
 */
export const getIsAccordionInView = activeAccordionItem =>
  activeAccordionItem.getBoundingClientRect().bottom < global.innerHeight;
