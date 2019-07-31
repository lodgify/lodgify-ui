import { getImgSrc } from './getImgSrc';

const props = {
  apiKey: 'some apiKey',
  latitude: 123,
  longitude: 234,
};

const height = '1px';
const parentNodeWidth = 1;

describe('getImgSrc', () => {
  describe('if `parentNodeWidth` is `0`', () => {
    it('should return `undefined`', () => {
      const actual = getImgSrc(props, height, 0);

      expect(actual).toBe(undefined);
    });
  });

  describe('if `parentNodeWidth` is not `0`', () => {
    describe('if `isShowingExactLocation` and `isShowingApproximateLocation` are `false`', () => {
      it('should return the right string', () => {
        const actual = getImgSrc(
          {
            ...props,
            isShowingApproximateLocation: false,
            isShowingExactLocation: false,
          },
          height,
          parentNodeWidth
        );

        expect(actual).toMatchSnapshot();
      });
    });

    describe('if `isShowingExactLocation` is `true`', () => {
      it('should return the right string', () => {
        const actual = getImgSrc(
          {
            ...props,
            isShowingApproximateLocation: false,
            isShowingExactLocation: true,
          },
          height,
          parentNodeWidth
        );

        expect(actual).toMatchSnapshot();
      });
    });

    describe('if `isShowingApproximateLocation` is `true`', () => {
      it('should return the right string', () => {
        const actual = getImgSrc(
          {
            ...props,
            isShowingApproximateLocation: true,
            isShowingExactLocation: false,
          },
          height,
          parentNodeWidth
        );

        expect(actual).toMatchSnapshot();
      });
    });
  });
});
