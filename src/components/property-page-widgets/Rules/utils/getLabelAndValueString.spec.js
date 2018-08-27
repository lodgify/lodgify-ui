import { getLabelAndValueString } from './getLabelAndValueString';

const time = '🕒';

describe('getLabelAndValueString', () => {
  it('should return a string for the check in time', () => {
    const actual = getLabelAndValueString('Check in', time);

    expect(actual).toBe(`Check in: ${time}`);
  });
});
