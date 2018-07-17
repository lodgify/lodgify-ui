import {
  NAVIGATION_ITEM_COUNT,
  INITIAL_NAVIGATION_ITEM_WIDTH,
} from '../constants';

export const getBarSizing = (isShowingSummary, isShowingLocationDropdown) => {
  const output = {
    rangePickerWidth: 0,
    computer: 3,
  };

  const isShowingSummaryValue = isShowingSummary ? 1 : 0;
  const isShowingLocationDropdownValue = isShowingLocationDropdown ? 1 : 0;

  const amountOfItemsShown =
    INITIAL_NAVIGATION_ITEM_WIDTH +
    isShowingSummaryValue +
    isShowingLocationDropdownValue;

  output.rangePickerWidth =
    NAVIGATION_ITEM_COUNT -
    isShowingSummaryValue -
    isShowingLocationDropdownValue;

  switch (amountOfItemsShown) {
    case 3:
      output.computer = 4;
      break;
    case 5:
      output.computer = 2;
      break;
  }

  return output;
};
