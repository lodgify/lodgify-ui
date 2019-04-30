import { setImageGallerySlidesHeight } from './setImageGallerySlidesHeight';

const height = 100;
const imageWrapperElement = { style: {} };

const componentRef = {
  querySelector: jest.fn(() => imageWrapperElement),
};

describe('`setGallerySlidesHeight`', () => {
  it('call `componentRef.querySelector` with the right argument', () => {
    setImageGallerySlidesHeight(height, componentRef);

    expect(componentRef.querySelector).toHaveBeenCalledWith(
      '.image-gallery-slides'
    );
  });

  describe('the function passed to `imageGalleries.forEach`', () => {
    it('should set `gallery.style.height` to `height', () => {
      setImageGallerySlidesHeight(height);

      expect(imageWrapperElement.style.height).toBe('100px');
    });
  });

  it('should return `undefined`', () => {
    const actual = setImageGallerySlidesHeight(height);

    expect(actual).toBe(undefined);
  });
});
