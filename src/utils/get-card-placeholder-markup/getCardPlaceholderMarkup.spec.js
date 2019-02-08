import { getCardPlaceholderMarkup } from './getCardPlaceholderMarkup';

describe('getCardPlaceholderMarkup', () => {
  it('should return the right structure', () => {
    const actual = getCardPlaceholderMarkup();

    expect(actual).toMatchSnapshot();
  });
});
