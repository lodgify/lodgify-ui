import { getWindowHeight } from './getWindowHeight';

describe('`getWindowHeight`', () => {
  it('should return the window height', () => {
    const actual = getWindowHeight();

    expect(actual).toBe(global.innerHeight);
  });
});
