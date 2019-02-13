import { getEmptyState } from './getEmptyState';

describe('getEmptyState', () => {
  it('should return the right shape', () => {
    const state = {
      abc: {
        some: 'properties',
        live: 'here',
      },
      def: {
        more: 'are',
        here: 'as well',
      },
    };
    const actual = getEmptyState(state);

    expect(actual).toEqual({
      abc: { value: null },
      def: { value: null },
    });
  });
});
