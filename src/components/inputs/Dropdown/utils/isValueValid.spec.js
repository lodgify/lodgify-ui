import { isValueValid } from './isValueValid';

describe('`isValueValid`', () => {
  const testCases = [[undefined, undefined], [0, 0], ['a', 'b']];

  testCases.forEach(caseArguments => {
    it('should return the right value', () => {
      const actual = isValueValid(...caseArguments);

      expect(actual).toMatchSnapshot();
    });
  });
});
