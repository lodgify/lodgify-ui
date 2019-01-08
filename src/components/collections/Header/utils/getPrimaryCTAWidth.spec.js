import { getPrimaryCTAWidth } from './getPrimaryCTAWidth';

const primaryCTA = { onClick: expect.any(Function), text: 'Book now' };

describe('`getPrimaryCTAWidth`', () => {
  it('should return the width of the primaryCTA if available', () => {
    const actual = getPrimaryCTAWidth(primaryCTA);

    expect(actual).toBe(103);
  });

  it('should return zero if primaryCTA is not available', () => {
    const actual = getPrimaryCTAWidth(undefined);

    expect(actual).toBe(0);
  });
});
