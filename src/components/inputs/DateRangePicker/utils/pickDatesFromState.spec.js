import { pickDatesFromState } from './pickDatesFromState';

describe('pickDatesFromState', () => {
  it('should pick `endDate` and `startDate` from the state', () => {
    const state = { endDate: 'bzzt', startDate: 'frrrp' };
    const actual = pickDatesFromState(state);

    expect(actual).toEqual(state);
  });

  it('should not pick any other properties from state', () => {
    const state = { pick: 'me', over: 'here', please: 'pick me' };
    const actual = pickDatesFromState(state);

    expect(actual).toEqual({});
  });
});
