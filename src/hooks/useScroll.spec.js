import { act } from 'react-dom/test-utils';

import { useScroll } from './useScroll';
import { testHook } from './mocks/testHook';

jest.mock('debounce', () => ({
  debounce: f => f,
}));

const map = {};

global.document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});
global.document.removeEventListener = jest.fn(event => {
  map[event] = null;
});

describe('useScroll', () => {
  let result;
  const callback = jest.fn(() => 'foo');

  const testComponent = testHook(() => {
    result = useScroll(callback, 'bar');
  });

  describe(`if useScroll is called with arguments`, () => {
    it('result should be equal to the initial value', () => {
      expect(result).toBe('bar');
    });
  });

  describe('if window.scroll event trigger', () => {
    it('result should be equal to callback return', () => {
      act(() => {
        map.scroll(new Event('scroll'));
      });
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('when the component is unmount', () => {
    it('should remove the eventListener', () => {
      act(() => {
        testComponent.unmount();
      });
      expect(callback).toHaveBeenCalled();
    });
  });
});
