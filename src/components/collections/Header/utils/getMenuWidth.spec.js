jest.mock('get-value');

import get from 'get-value';

import { getMenuWidth } from './getMenuWidth';

describe('getMenuWidth', () => {
  it('should call `get` with the right arguments', () => {
    const headerElement = '🎧';

    getMenuWidth(headerElement);

    expect(get).toHaveBeenCalledWith(headerElement, ['children', 0]);
  });

  describe('if `get` returns `undefined`', () => {
    it('should return `0`', () => {
      const actual = getMenuWidth();

      expect(actual).toBe(0);
    });
  });

  describe('if `get` returns an element', () => {
    it('should return the `clientWidth`', () => {
      const clientWidth = 'WIIIIIIIDE';
      const menuElement = { clientWidth };

      get.mockReturnValueOnce(menuElement);
      const actual = getMenuWidth();

      expect(actual).toBe(clientWidth);
    });
  });
});
