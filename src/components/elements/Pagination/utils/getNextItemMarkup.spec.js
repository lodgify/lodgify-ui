import { mount } from 'enzyme';

import { getNextItemMarkup } from './getNextItemMarkup';

const getNextItem = isShowingPageNumbers =>
  mount(getNextItemMarkup(isShowingPageNumbers));

describe('getNextItemMarkup', () => {
  describe('if `isShowingPageNumbers` is true', () => {
    it('should return the right markup', () => {
      const actual = getNextItem(true);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isShowingPageNumbers` is false', () => {
    it('should return the right markup', () => {
      const actual = getNextItem(false);

      expect(actual).toMatchSnapshot();
    });
  });
});
