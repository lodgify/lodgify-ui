import { getParagraphMarkup } from './getParagraphMarkup';

describe('getParagraphMarkup', () => {
  it('should return the right shape', () => {
    const descriptionText = Array(10)
      .fill('yo')
      .join(' ');
    const actual = getParagraphMarkup(descriptionText, 'some button text');

    expect(actual).toMatchSnapshot();
  });
});
