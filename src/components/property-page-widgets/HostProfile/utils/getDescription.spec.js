import { getDescription } from './getDescription';

describe('`getDescription`', () => {
  it('should have the right structure', () => {
    const description = 'lorem upsum dulur sumut';
    const actual = getDescription(description);

    expect(actual).toMatchSnapshot();
  });

  it('should return null if the description length is 0 or undefined', () => {
    const description = undefined;
    const actual = getDescription(description);

    expect(actual).toBe(null);
  });

  describe('if `description` is valid html', () => {
    it('should render the right structure', () => {
      const description = '<strong>bc</strong>';
      const actual = getDescription(description);

      expect(actual).toMatchSnapshot();
    });
  });
});
