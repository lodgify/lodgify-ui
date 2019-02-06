import { getFormMarkup } from './getFormMarkup';

describe('`getFormMarkup`', () => {
  const onAccept = jest.fn();
  const buttonText = 'Le Goose';
  const text = 'eau';
  const linkText = 'Bip';
  const linkUrl = 'Bup';

  it('should render the right structure', () => {
    const actual = getFormMarkup(buttonText, linkText, linkUrl, onAccept, text);

    expect(actual).toMatchSnapshot();
  });
});
