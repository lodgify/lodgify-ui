import { getImageHeight } from './getImageHeight';

const height = 9000;

const getBoundingClientRect = jest.fn(() => ({
  height,
}));

const componentRef = {
  querySelector: jest.fn(() => ({
    getBoundingClientRect,
  })),
};

describe('`getImageHeight`', () => {
  describe('if `componentRef` is falsy', () => {
    it('should not call `componentRef.querySelector` ', () => {
      getImageHeight(undefined);

      expect(componentRef.querySelector).not.toHaveBeenCalled();
    });

    it('should return undefined', () => {
      const actual = getImageHeight(undefined);

      expect(actual).toBe(undefined);
    });
  });
  describe('if `componentRef` is truthy', () => {
    it('should call `componentRef.querySelector` with the right argument', () => {
      getImageHeight(componentRef);

      expect(componentRef.querySelector).toHaveBeenCalledWith(
        '.image-gallery-slide'
      );
    });

    it('should call `componentRef.querySelector.getBoundingClientRect` with the right argument', () => {
      getImageHeight(componentRef);

      expect(getBoundingClientRect).toHaveBeenCalled();
    });

    it('should return the right value', () => {
      const actual = getImageHeight(componentRef);

      expect(actual).toBe(height);
    });
  });
});
