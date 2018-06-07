import { getUpOrDownFromBoolean } from './getUpOrDownFromBoolean';

describe('getUpOrDownFromBoolean', () => {
  it('should return `up` if `willOpenAbove` is true', () => {
    const actual = getUpOrDownFromBoolean(true);
    expect(actual).toBe('up');
  });

  it('should return `down` if `willOpenAbove` is false', () => {
    const actual = getUpOrDownFromBoolean(false);
    expect(actual).toBe('down');
  });
});
