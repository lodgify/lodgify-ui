import { toUpper } from './toUpper';

describe('toUpper', () => {
  describe('when passed a string', () => {
    it('should return the right value', () => {
      const actual = toUpper('yo');

      expect(actual).toBe('YO');
    });
  });

  describe('when passed any other value', () => {
    const cases = [
      { value: {}, expected: undefined },
      { value: undefined, expected: undefined },
      { value: 1, expected: undefined },
      { value: [], expected: undefined },
      { value: true, expected: undefined },
    ];

    cases.forEach(({ value, expected }) => {
      it('should return the right value', () => {
        const actual = toUpper(value);

        expect(actual).toBe(expected);
      });
    });
  });
});
