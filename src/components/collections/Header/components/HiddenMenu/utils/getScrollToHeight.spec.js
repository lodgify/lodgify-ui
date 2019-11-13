import { getScrollToHeight } from './getScrollToHeight';

describe('getScrollToHeight', () => {
  it('should return the correct number', () => {
    global.innerHeight = 1;

    const currentScrollHeight = 0;
    const bottomOfActiveAccordionItem = 1;

    const actual = getScrollToHeight(
      currentScrollHeight,
      bottomOfActiveAccordionItem
    );

    expect(actual).toBe(0);
  });
});
