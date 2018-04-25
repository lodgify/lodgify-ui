import { getOpenDirection } from './getOpenDirection';

describe('getOpenDirection', () => {
  it('should return `up` if `willOpenAbove` is true', () => {
    const actual = getOpenDirection(true);
    expect(actual).toBe('up');
  });

  it('should return `down` if `willOpenAbove` is false', () => {
    const actual = getOpenDirection(false);
    expect(actual).toBe('down');
  });
});
