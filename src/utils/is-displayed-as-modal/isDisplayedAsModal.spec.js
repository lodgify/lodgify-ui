import { isDisplayedAsModal } from './isDisplayedAsModal';

describe('`isDisplayedAsModal`', () => {
  it('should return false if window height exceeds 850px', () => {
    const windowHeight = 900;
    const actual = isDisplayedAsModal(windowHeight);

    expect(actual).toBe(false);
  });

  it('should return true if window height does not exceed 850px', () => {
    const windowHeight = 730;
    const actual = isDisplayedAsModal(windowHeight);

    expect(actual).toBe(true);
  });
});
