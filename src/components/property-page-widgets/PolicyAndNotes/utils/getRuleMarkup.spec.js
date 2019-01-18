import { getRuleMarkup } from './getRuleMarkup';

describe('`getRuleMarkup`', () => {
  it('should return the right structure', () => {
    const actual = getRuleMarkup('yo', 1);

    expect(actual).toMatchSnapshot();
  });
});
