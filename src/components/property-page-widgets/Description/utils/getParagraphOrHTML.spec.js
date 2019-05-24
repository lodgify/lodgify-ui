jest.mock('is-html');

import isValidHTML from 'is-html';

import { getParagraphOrHTML } from './getParagraphOrHTML';

describe('getParagraphOrHTML', () => {
  it(' should call `isValidHTML` with the right arguments', () => {
    const string = 'a string';

    getParagraphOrHTML(string);

    expect(isValidHTML).toHaveBeenCalledWith(string);
  });

  describe('if `isValidHTML` returns `true`', () => {
    it('should return the right shape', () => {
      isValidHTML.mockReturnValueOnce(true);

      const string = 'a string';
      const actual = getParagraphOrHTML(string);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isValidHTML` returns `false`', () => {
    it('should return the right shape', () => {
      isValidHTML.mockReturnValueOnce(false);

      const string = 'a string';
      const actual = getParagraphOrHTML(string);

      expect(actual).toMatchSnapshot();
    });
  });
});
