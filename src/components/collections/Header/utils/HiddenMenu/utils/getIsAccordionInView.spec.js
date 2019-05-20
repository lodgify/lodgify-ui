import { getIsAccordionInView } from './getIsAccordionInView';

const activeAccordionItem = {};

activeAccordionItem.getBoundingClientRect = jest.fn(() => ({ bottom: 0 }));

describe('getIsAccordionInView', () => {
  it('should return the right boolean', () => {
    global.innerHeight = 500;
    const actual = getIsAccordionInView(activeAccordionItem);

    expect(actual).toBe(true);
  });
});
