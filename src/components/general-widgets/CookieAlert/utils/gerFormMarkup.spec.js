import { getFormMarkup } from './getFormMarkup';

describe('`getFormMarkup`', () => {
  const isOpen = true;
  const onSubmit = jest.fn();
  const buttonText = 'Le Goose';
  const text = 'eau';

  describe('if isOpen is true', () => {
    it('should render the right structure', () => {
      const actual = getFormMarkup(isOpen, onSubmit, buttonText, text);

      expect(actual).toMatchSnapshot();
    });
  });
  describe('if isOpen is false', () => {
    it('should return false', () => {
      const actual = getFormMarkup(false, onSubmit, buttonText, text);

      expect(actual).toMatchSnapshot();
    });
  });
});
