import { getFirstPropertyIndexOfActivePage } from './getFirstPropertyIndexOfActivePage';

describe('getFirstPropertyIndexOfActivePage', () => {
  it('should return the correct value', () => {
    const actual = getFirstPropertyIndexOfActivePage(1);

    expect(actual).toBe(0);
  });
});
