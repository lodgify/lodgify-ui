import { getIsFluid } from './getIsFluid';

describe('`getIsFluid`', () => {
  describe('when `imageWidth` or `imageHeight` are defined', () => {
    const testCases = [
      {
        props: [true, 1, 1],
      },
      {
        props: [true, 1, undefined],
      },
      {
        props: [true, undefined, 1],
      },
      {
        props: [false, 1, 1],
      },
      {
        props: [false, 1, undefined],
      },
      {
        props: [false, undefined, 1],
      },
    ];

    testCases.forEach(({ props }) => {
      it(`should return 'false' when arguements are ${props}`, () => {
        const actual = getIsFluid(...props);

        expect(actual).toEqual(false);
      });
    });
  });

  describe('when `imageWidth` and `imageHeight are both undefined', () => {
    const testCases = [
      {
        props: [true, undefined, undefined],
        expectedValue: true,
      },
      {
        props: [false, undefined, undefined],
        expectedValue: false,
      },
    ];

    testCases.forEach(({ props, expectedValue }) => {
      it(`should return ${expectedValue} when arguements are ${props}`, () => {
        const actual = getIsFluid(...props);

        expect(actual).toEqual(expectedValue);
      });
    });
  });
});
