jest.mock('./getFirstPropertyIndexOfActivePage');
jest.mock('./getLastPropertyPositionOfActivePage');

import { getFirstPropertyIndexOfActivePage } from './getFirstPropertyIndexOfActivePage';
import { getLastPropertyPositionOfActivePage } from './getLastPropertyPositionOfActivePage';
import { getPropertySearchResultsToDisplay } from './getPropertySearchResultsToDisplay';

const firstPositionOfActivePage = 1;
const lastPositionOfActivePage = 2;

getFirstPropertyIndexOfActivePage.mockReturnValue(firstPositionOfActivePage);
getLastPropertyPositionOfActivePage.mockReturnValue(lastPositionOfActivePage);

const activePage = 1;
const properties = [];

describe('getPropertySearchResultsToDisplay', () => {
  it('should return the correct array', () => {
    const actual = getPropertySearchResultsToDisplay(activePage, properties);

    expect(actual).toEqual([]);
  });
});
