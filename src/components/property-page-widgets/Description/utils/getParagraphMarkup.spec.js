import { getDescriptionTextMarkup } from './getDescriptionTextMarkup';

describe('getDescriptionTextMarkup', () => {
  it('should return the right shape', () => {
    const descriptionText = Array(10)
      .fill('yo')
      .join(' ');
    const actual = getDescriptionTextMarkup(
      descriptionText,
      'some button text'
    );

    expect(actual).toMatchSnapshot();
  });
});
