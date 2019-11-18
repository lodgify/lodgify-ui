import { testidSelectorFactory } from './testid-selector-factory';

describe('testidSelectorFactory', () => {
  it(`should return a function`, () => {
    const getTestid = testidSelectorFactory('prefix');

    expect(getTestid).toBeInstanceOf(Function);
  });
  describe('given a string as parameter', () => {
    describe('if the returned function is called without argument', () => {
      it('should return the same string', () => {
        const getTestid = testidSelectorFactory('prefix');
        const testid = getTestid();

        expect(testid).toEqual('[data-testid="prefix"]');
      });
    });
    describe('if the returned function is called with argument', () => {
      it('should return the prefixed string', () => {
        const getTestid = testidSelectorFactory('prefix');
        const testid = getTestid('foo');

        expect(testid).toEqual('[data-testid="prefix-foo"]');
      });
    });
  });
  describe('given a string and an operator as parameters', () => {
    describe('if the returned function is called without argument', () => {
      it('should return the test id selector', () => {
        const getTestid = testidSelectorFactory('prefix');
        const testid = getTestid(null, '*');

        expect(testid).toEqual('[data-testid*="prefix"]');
      });
    });
    describe('if the returned function is called with argument', () => {
      it('should return the the testid selector of the prefixed string', () => {
        const getTestid = testidSelectorFactory('prefix');
        const testid = getTestid('foo', '*');

        expect(testid).toEqual('[data-testid*="prefix-foo"]');
      });
    });
  });
});
