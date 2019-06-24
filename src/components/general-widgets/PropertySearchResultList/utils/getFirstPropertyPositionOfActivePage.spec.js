jest.mock('./getFirstPropertyIndexOfActivePage');

import { getFirstPropertyPositionOfActivePage } from './getFirstPropertyPositionOfActivePage';
import { getFirstPropertyIndexOfActivePage } from './getFirstPropertyIndexOfActivePage';

const activePage = 13;

const firstPropertyIndexOfActivePage = 2;

getFirstPropertyIndexOfActivePage.mockReturnValue(
  firstPropertyIndexOfActivePage
);

describe('getFirstPropertyPositionOfActivePage', () => {
  it('should call `getFirstPropertyIndexOfActivePage` with the correct argument', () => {
    getFirstPropertyPositionOfActivePage(activePage);

    expect(getFirstPropertyIndexOfActivePage).toBeCalledWith(activePage);
  });

  it('should return the correct value', () => {
    const actual = getFirstPropertyPositionOfActivePage(activePage);

    expect(actual).toBe(3);
  });
});
