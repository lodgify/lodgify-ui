import { getToggledIsActiveState } from './getToggledIsActiveState';

describe('getToggledIsActiveState', () => {
  it('should return the right object', () => {
    const isActive = true;
    const actual = getToggledIsActiveState({ isActive });

    expect(actual).toEqual({ isActive: !isActive });
  });
});
