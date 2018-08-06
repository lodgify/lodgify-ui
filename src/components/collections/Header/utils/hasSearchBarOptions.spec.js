import { hasSearchBarOptions } from './hasSearchBarOptions';

describe('hasSearchBarOptions', () => {
  describe('if `guestsOptions` and `locationOptions` are both defined and populated', () => {
    it('should return `true`', () => {
      const guestsOptions = [{}];
      const locationOptions = [{}];
      const actual = hasSearchBarOptions(guestsOptions, locationOptions);

      expect(actual).toBe(true);
    });
  });

  describe('if either of `guestsOptions` and `locationOptions` is undefined or not populated', () => {
    it('should return `false`', () => {
      const testCases = [
        [undefined, undefined],
        [[{}], undefined],
        [undefined, [{}]],
        [[{}], []],
        [[], [{}]],
        [[], []],
      ];

      testCases.forEach(([guestsOptions, locationOptions]) => {
        const actual = hasSearchBarOptions(guestsOptions, locationOptions);

        expect(actual).toBe(false);
      });
    });
  });
});
