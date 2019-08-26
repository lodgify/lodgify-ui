import { getResultsCountText } from './getResultsCountText';

describe('getResultsCountText', () => {
  it('should return the correct string', () => {
    const actual = getResultsCountText(1, 'thing');

    expect(actual).toBe('1 thing');
  });
});
