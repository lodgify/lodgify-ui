import { getIsToggleCheckedControlled } from './getIsToggleCheckedControlled';

describe('getIsToggleCheckedControlled', () => {
  it('should return the right value when passed', () => {
    const testCases = [
      {
        isToggleChecked: null,
        value: false,
      },
      {
        isToggleChecked: false,
        value: true,
      },
    ];

    testCases.forEach(({ isToggleChecked, value }) => {
      const actual = getIsToggleCheckedControlled(isToggleChecked);

      expect(actual).toBe(value);
    });
  });
});
