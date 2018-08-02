import { pickDateFromState } from './pickDateFromState';

describe('pickDateFromState', () => {
  it('should pick `date` from the state', () => {
    const state = { date: 'bzzt' };
    const actual = pickDateFromState(state);

    expect(actual).toEqual(state);
  });

  it('should not pick any other properties from state', () => {
    const state = { pick: 'me', over: 'here', please: 'pick me' };
    const actual = pickDateFromState(state);

    expect(actual).toEqual({});
  });
});
