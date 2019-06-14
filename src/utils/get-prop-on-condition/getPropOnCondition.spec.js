import { getPropOnCondition } from './getPropOnCondition';

describe('getPropOnCondition', () => {
  describe('if `condition` is `true`', () => {
    it('should return `prop`', () => {
      const prop = 'some prop';
      const actual = getPropOnCondition(prop, true);

      expect(actual).toBe(prop);
    });
  });

  describe('if `condition` is `false`', () => {
    it('should return `undefined`', () => {
      const actual = getPropOnCondition('another prop', false);

      expect(actual).toBe(undefined);
    });
  });
});
