import { getActivePage } from './getActivePage';

describe('getActivePage', () => {
  describe('if `propsActivePage` is `undefined`', () => {
    it('should return `stateActivePage`', () => {
      const stateActivePage = 'some page';
      const actual = getActivePage(undefined, stateActivePage);

      expect(actual).toBe(stateActivePage);
    });
  });

  describe('if `propsActivePage` is defined', () => {
    it('should return `propsActivePage`', () => {
      const propsActivePage = 'some other page';
      const actual = getActivePage(propsActivePage);

      expect(actual).toBe(propsActivePage);
    });
  });
});
