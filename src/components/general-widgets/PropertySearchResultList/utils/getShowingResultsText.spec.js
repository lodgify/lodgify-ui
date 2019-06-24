import {
  TOTAL_ITEM_NUMBER_PLACEHOLDER,
  FIRST_ITEM_OF_PAGE_NUMBER_PLACEHOLDER,
  LAST_ITEM_OF_PAGE_NUMBER_PLACEHOLDER,
} from 'utils/default-strings';

import { getShowingResultsText } from './getShowingResultsText';

const activePageFirstItemPosition = 1;
const activePageLastItemPosition = 1;
const numberOfProperties = 1;

const replaceSpy = jest.spyOn(String.prototype, 'replace');

describe('getShowingResultsText', () => {
  it('should call `String.prototype.replace` the right number of times', () => {
    getShowingResultsText(
      activePageFirstItemPosition,
      activePageLastItemPosition,
      numberOfProperties
    );

    expect(replaceSpy).toHaveBeenCalledTimes(3);
  });

  it('should call `String.prototype.replace` with the correct arguments', () => {
    getShowingResultsText(
      activePageFirstItemPosition,
      activePageLastItemPosition,
      numberOfProperties
    );

    expect(String.prototype.replace.mock.calls[0]).toEqual([
      FIRST_ITEM_OF_PAGE_NUMBER_PLACEHOLDER,
      activePageFirstItemPosition,
    ]);
    expect(String.prototype.replace.mock.calls[1]).toEqual([
      LAST_ITEM_OF_PAGE_NUMBER_PLACEHOLDER,
      activePageLastItemPosition,
    ]);
    expect(String.prototype.replace.mock.calls[2]).toEqual([
      TOTAL_ITEM_NUMBER_PLACEHOLDER,
      numberOfProperties,
    ]);
  });

  it('should return the correct value', () => {
    const actual = getShowingResultsText(
      activePageFirstItemPosition,
      activePageLastItemPosition,
      numberOfProperties
    );

    expect(actual).toEqual('Showing 1 - 1 of 1 places.');
  });
});
