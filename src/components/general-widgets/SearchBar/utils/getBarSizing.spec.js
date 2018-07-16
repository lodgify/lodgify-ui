import { getBarSizing } from './getBarSizing';

describe('getBarSizing', () => {
  it('should return the right sizing if is showing summary and location dropdown', () => {
    const isShowingSummary = true;
    const isShowingLocationDropdown = true;

    const actual = getBarSizing(isShowingSummary, isShowingLocationDropdown);

    expect(actual).toEqual({
      rangePickerWidth: 3,
      computer: 2,
    });
  });

  it('should return the right sizing if is showing summary and not location dropdown', () => {
    const isShowingSummary = true;
    const isShowingLocationDropdown = false;

    const actual = getBarSizing(isShowingSummary, isShowingLocationDropdown);

    expect(actual).toEqual({
      rangePickerWidth: 4,
      computer: 3,
    });
  });

  it('should return the right sizing if is not showing summary or location dropdown', () => {
    const isShowingSummary = false;
    const isShowingLocationDropdown = false;

    const actual = getBarSizing(isShowingSummary, isShowingLocationDropdown);

    expect(actual).toEqual({
      rangePickerWidth: 5,
      computer: 4,
    });
  });
});
