jest.mock('lodash/get');
jest.mock('./getWidthPlusMargin');

import { get } from 'lodash';

import { getNavigationItemsWidth } from './getNavigationItemsWidth';
import { getWidthPlusMargin } from './getWidthPlusMargin';

describe('getNavigationItemsWidth', () => {
  it('should call `get` with the right arguments', () => {
    const headerElement = '🎧';

    getNavigationItemsWidth(headerElement);

    expect(get).toHaveBeenCalledWith(headerElement, [
      'children',
      0,
      'children',
      1,
    ]);
  });

  describe('if `get` returns `undefined`', () => {
    it('should return `0`', () => {
      const actual = getNavigationItemsWidth();

      expect(actual).toBe(0);
    });
  });

  describe('if `get` returns an element', () => {
    it('should call `getWidthPlusMargin` once with each item in `navigationElement.children`', () => {
      const children = [1, 2];
      const menuElement = { children };

      get.mockReturnValueOnce(menuElement);
      getNavigationItemsWidth();

      expect(getWidthPlusMargin).toHaveBeenCalledTimes(2);
      expect(getWidthPlusMargin).toHaveBeenCalledWith(1);
      expect(getWidthPlusMargin).toHaveBeenCalledWith(2);
    });

    it('should return the total width of the navigation items', () => {
      const children = [1, 2];
      const menuElement = { children };

      get.mockReturnValueOnce(menuElement);
      getWidthPlusMargin.mockReturnValue(1);
      const actual = getNavigationItemsWidth();

      expect(actual).toBe(2);
    });
  });
});
