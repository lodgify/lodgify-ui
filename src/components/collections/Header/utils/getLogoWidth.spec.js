jest.mock('get-value');

import get from 'get-value';

import { getLogoWidth } from './getLogoWidth';

describe('getLogoWidth', () => {
  it('should call `get` with the right arguments', () => {
    const headerElement = '🎧';

    getLogoWidth(headerElement);

    expect(get).toHaveBeenCalledWith(headerElement, [
      'children',
      0,
      'childNodes',
      0,
    ]);
  });

  describe('if `get` returns `undefined`', () => {
    it('should return `0`', () => {
      const actual = getLogoWidth();

      expect(actual).toBe(0);
    });
  });

  describe('if `get` returns an element', () => {
    it('should return the `clientWidth`', () => {
      const clientWidth = 'numsubs';
      const logo = { clientWidth };

      get.mockReturnValueOnce(logo);
      const actual = getLogoWidth();

      expect(actual).toBe(clientWidth);
    });
  });
});
