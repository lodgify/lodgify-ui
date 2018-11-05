import { getIsFluid } from './getIsFluid';

describe('`getIsFluid`', () => {
  describe('when `imageWidth` or `imageHeight` are defined', () => {
    const testCases = [
      {
        props: [1, 1],
      },
      {
        props: [1, undefined],
      },
      {
        props: [undefined, 1],
      },
    ];

    testCases.forEach(({ props }) => {
      it(`should return 'false' when arguements are ${props}`, () => {
        const actual = getIsFluid(...props);

        expect(actual).toMatchSnapshot();
      });
    });
  });

  describe('when `imageWidth` and `imageHeight are both undefined', () => {
    it(`should return the right value`, () => {
      const actual = getIsFluid(undefined, undefined);

      expect(actual).toMatchSnapshot();
    });
  });
});
