import { getToggledState } from './getToggledState';

describe('getToggledState', () => {
  it('should return the right object', () => {
    const isActive = true;
    const actual = getToggledState({ isActive });

    expect(actual).toEqual({ isActive: !isActive });
  });
});
