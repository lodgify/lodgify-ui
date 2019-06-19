import { mount } from 'enzyme';

import { getPreviousItemMarkup } from './getPreviousItemMarkup';

const getPreviousItem = isShowingPageNumbers =>
  mount(getPreviousItemMarkup(isShowingPageNumbers));

describe('getPreviousItemMarkup', () => {
  describe('if `isShowingPageNumbers` is true', () => {
    it('should return the right markup', () => {
      const actual = getPreviousItem(true);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isShowingPageNumbers` is false', () => {
    it('should return the right markup', () => {
      const actual = getPreviousItem(false);

      expect(actual).toMatchSnapshot();
    });
  });
});
