import { ICON_NAMES } from '../../../elements/Icon/constants';

import { getIcon } from './getIcon';

describe('getIcon', () => {
  describe('if value is not valid (is empty)', () => {
    it('shold return caret down icon', () => {
      const testCase = null;
      const actual = getIcon(testCase);

      expect(actual).toBe(ICON_NAMES.CARET_DOWN);
    });
  });

  describe('if value is a valid value (not empty)', () => {
    it('shold return close icon', () => {
      const testCase = 'test_value';
      const actual = getIcon(testCase);

      expect(actual).toBe(ICON_NAMES.CLOSE);
    });
  });

  describe('if value is not valid (is empty) and isClearable is false', () => {
    it('shold return caret down icon', () => {
      const testCase = null;
      const actual = getIcon(testCase, false);

      expect(actual).toBe(ICON_NAMES.CARET_DOWN);
    });
  });

  describe('if value is valid (not empty) and isClearable is false', () => {
    it('shold return caret down icon', () => {
      const testCase = 'test_value';
      const actual = getIcon(testCase, false);

      expect(actual).toBe(ICON_NAMES.CARET_DOWN);
    });
  });

  describe('if value is not valid (is empty) and isClearable is true', () => {
    it('shold return caret down icon', () => {
      const testCase = null;
      const actual = getIcon(testCase, true);

      expect(actual).toBe(ICON_NAMES.CARET_DOWN);
    });
  });

  describe('if value is valid (not empty) and isClearable is true', () => {
    it('shold return close icon', () => {
      const testCase = 'test_value';
      const actual = getIcon(testCase, true);

      expect(actual).toBe(ICON_NAMES.CLOSE);
    });
  });
});
