import { getCheckInOrOutTimeLabel } from './getCheckInOrOutTimeLabel';

const time = '🕒';

describe('getCheckInOrOutTimeLabel', () => {
  describe('by default', () => {
    it('should return a string for the check in time', () => {
      const actual = getCheckInOrOutTimeLabel(time);
      expect(actual).toBe(`Check in: ${time}`);
    });
  });

  describe('if `isCheckOut` is true', () => {
    it('should return a string for the check out time', () => {
      const actual = getCheckInOrOutTimeLabel(time, true);
      expect(actual).toBe(`Check out: ${time}`);
    });
  });
});
