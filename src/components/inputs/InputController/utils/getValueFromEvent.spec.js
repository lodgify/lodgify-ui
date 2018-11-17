import { getValueFromEvent } from './getValueFromEvent';

describe('getValueFromEvent', () => {
  describe('if it is passed a an object structured as an event', () => {
    it('should return `event.target.value`', () => {
      const value = '🍞';
      const mockEvent = { target: { value } };
      const actual = getValueFromEvent(mockEvent);

      expect(actual).toBe(value);
    });
  });

  describe('if no value is found', () => {
    it('should return undefined', () => {
      const value = undefined;
      const mockEvent = { target: {} };
      const actual = getValueFromEvent(mockEvent);

      expect(actual).toBe(value);
    });
  });
});
