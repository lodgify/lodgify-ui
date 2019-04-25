import { getDescriptionWithExtraDescription } from './getDescriptionWithExtraDescription';

describe('getDescriptionWithExtraDescription', () => {
  it('should return the right structure', () => {
    const actual = getDescriptionWithExtraDescription('yo', 'bro', 'go');

    expect(actual).toMatchSnapshot();
  });
});
