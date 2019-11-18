import { testidFactory } from './testid-factory';

describe('testidFactory', () => {
  it(`should return a function`, () => {
    const getTestid = testidFactory('prefix');

    expect(getTestid).toBeInstanceOf(Function);
  });
  describe('given a string as parameter', () => {
    describe('if the returned function is called without argument', () => {
      it('should return the same string', () => {
        const getTestid = testidFactory('prefix');
        const testid = getTestid();

        expect(testid).toEqual('prefix');
      });
    });
    describe('if the returned function is called with argument', () => {
      it('should return the prefixed string', () => {
        const getTestid = testidFactory('prefix');
        const testid = getTestid('foo');

        expect(testid).toEqual('prefix-foo');
      });
    });
  });
});
