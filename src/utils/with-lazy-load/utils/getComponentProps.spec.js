import { getComponentProps } from './getComponentProps';

const props = {
  thisValue: '✅',
  butNotThisOne: '❌',
  orThisValue: '❌',
};

describe('getComponentProps', () => {
  describe('if `propKeys` is a falsy value', () => {
    it('should return the correct value', () => {
      const actual = getComponentProps(props, undefined);

      expect(actual).toEqual(props);
    });
  });

  describe('if `propKeys` is a truthy value', () => {
    it('should return the correct value', () => {
      const propKeys = ['butNotThisOne', 'orThisValue'];
      const actual = getComponentProps(props, propKeys);

      expect(actual).toEqual({
        thisValue: '✅',
      });
    });
  });
});
