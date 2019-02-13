import { mapValueToProps } from './mapValueToProps';

describe('mapValueToProps', () => {
  describe('if `value` is falsy', () => {
    it('should return the right object', () => {
      const testCases = [null, false, undefined, '', 0];

      testCases.forEach(testCase => {
        const actual = mapValueToProps(testCase);

        expect(actual).toEqual({ date: null });
      });
    });
  });

  describe('if `value` is truthy', () => {
    it('should return the right object', () => {
      const testCases = [true, 'some string', 1, {}, { date: 'some date' }];

      testCases.forEach(testCase => {
        const actual = mapValueToProps(testCase);

        expect(actual).toMatchSnapshot();
      });
    });
  });
});
