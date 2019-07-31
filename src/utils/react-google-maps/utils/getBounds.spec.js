import { getBounds } from './getBounds';

describe('getBounds', () => {
  describe('if anything explodes', () => {
    it('should return `undefined`', () => {
      const testCases = [
        undefined,
        null,
        {},
        {
          getBounds: () => {
            throw Error();
          },
        },
        { getBounds: () => ({}) },
        {
          getBounds: () => ({
            toJSON: () => {
              throw Error();
            },
          }),
        },
      ];

      testCases.forEach(testCase => {
        const actual = getBounds(testCase);

        expect(actual).toBe(undefined);
      });
    });
  });

  describe('if all goes well', () => {
    it('should return whatever `googleMap.getBounds().toJSON()` returns', () => {
      const someJSON = "me, I'm Jason";
      const actual = getBounds({
        getBounds: () => ({
          toJSON: () => someJSON,
        }),
      });

      expect(actual).toBe(someJSON);
    });
  });
});
