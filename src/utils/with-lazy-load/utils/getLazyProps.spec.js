import { getLazyProps } from './getLazyProps';

const props = {
  thisValue: '✅',
  alsoThisOne: '✅',
  butNotThisOne: '❌',
};

describe('getLazyProps', () => {
  describe('if `propKeys` are a falsy value', () => {
    it('should return the correct value', () => {
      const actual = getLazyProps(props, undefined);

      expect(actual).toEqual({});
    });
  });

  describe('if `propKeys` are a truthy value', () => {
    it('should return the correct value', () => {
      const propKeys = ['thisValue', 'alsoThisOne'];
      const actual = getLazyProps(props, propKeys);

      expect(actual).toEqual({
        thisValue: '✅',
        alsoThisOne: '✅',
      });
    });
  });
});
