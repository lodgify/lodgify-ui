import { isDescriptionDisplayingWithEllipsis } from './isDescriptionDisplayingWithEllipsis';

const descriptionTextArray = [
  'Lorem Ipsum is simply dummy text.',
  'Lorem Ipsum is simply dummy text.',
  'Lorem Ipsum is simply dummy text.',
];
const extraDescriptionText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

describe('the isDescriptionDisplayingWithEllipsis util', () => {
  it('should evaluate to `true`', () => {
    const actual = isDescriptionDisplayingWithEllipsis(
      descriptionTextArray.length - 1,
      descriptionTextArray,
      extraDescriptionText
    );

    expect(actual).toBe(true);
  });
});
