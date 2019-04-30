import { getImgSrc } from './getImgSrc';

const apiKey = 'some apiKey';
const height = '1px';
const latitude = 123;
const longitude = 234;
const parentNodeWidth = 1;

describe('getImgSrc', () => {
  describe('if `parentNodeWidth` is `0`', () => {
    it('should return `undefined`', () => {
      const actual = getImgSrc(apiKey, height, true, latitude, longitude, 0);

      expect(actual).toBe(undefined);
    });
  });

  describe('if `parentNodeWidth` is not `0`', () => {
    describe('if `isShowingExactLocation` is `false`', () => {
      it('should return the right string', () => {
        const actual = getImgSrc(
          apiKey,
          height,
          false,
          latitude,
          longitude,
          parentNodeWidth
        );

        expect(actual).toMatchSnapshot();
      });
    });

    describe('if `isShowingExactLocation` is `true`', () => {
      it('should return the right string', () => {
        const actual = getImgSrc(
          apiKey,
          height,
          true,
          latitude,
          longitude,
          parentNodeWidth
        );

        expect(actual).toMatchSnapshot();
      });
    });
  });
});
