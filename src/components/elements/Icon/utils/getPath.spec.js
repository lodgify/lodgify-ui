import { getPath } from './getPath';
import { PATH_DESCRIPTIONS } from './pathDescriptions';

describe('getPath', () => {
  it('should default to returning the right entry from PATH_DESCRIPTIONS', () => {
    const validName = 'question mark';
    const actual = getPath(validName);

    expect(actual).toBe(PATH_DESCRIPTIONS[validName]);
  });

  describe('if the `name` is not found in PATH_DESCRIPTIONS', () => {
    describe('and `path` is defined', () => {
      it('should return `path`', () => {
        const inValidNames = ['bean bag', undefined];
        const validPath = 'somePath';

        inValidNames.forEach(invalidName => {
          const actual = getPath(invalidName, validPath);

          expect(actual).toBe(validPath);
        });
      });
    });

    describe('and `path` is not defined', () => {
      it('should return a placeholder path', () => {
        const inValidNames = ['bean bag', undefined];
        const inValidPath = undefined;

        inValidNames.forEach(invalidName => {
          const actual = getPath(invalidName, inValidPath);

          expect(actual).toBe(PATH_DESCRIPTIONS['question mark']);
        });
      });
    });
  });
});
