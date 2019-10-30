import { act } from 'react-dom/test-utils';

import { useIsOpen } from './useIsOpen';
import { testHook } from './mocks/testHook';

describe('useIsOpen', () => {
  describe(`if 'useIsOpen' is called without arguments`, () => {
    let actual;

    testHook(() => {
      actual = useIsOpen();
    });

    it('should return an array', () => {
      expect(Array.isArray(actual)).toBe(true);
    });
    it(`should return false as first element`, () => {
      expect(actual[0]).toBe(false);
    });
    it('should return a function as second argument', () => {
      expect(typeof actual[1]).toBe('function');
    });
  });

  describe(`if useIsOpen is called with argument`, () => {
    it('should return the same as first result', () => {
      let actual;

      testHook(() => {
        actual = useIsOpen(true);
      });
      expect(actual[0]).toBe(true);
    });
  });
  describe('if second return element is called', () => {
    it('should toggle the first return element', () => {
      let isOpen, toggleIsOpen;

      testHook(() => {
        [isOpen, toggleIsOpen] = useIsOpen();
      });
      expect(isOpen).toBe(false);

      act(() => {
        toggleIsOpen();
      });

      expect(isOpen).toBe(true);
    });
  });
});
