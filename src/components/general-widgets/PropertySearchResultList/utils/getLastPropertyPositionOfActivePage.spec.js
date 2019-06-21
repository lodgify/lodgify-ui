import { getLastPropertyPositionOfActivePage } from './getLastPropertyPositionOfActivePage';

const numberOfProperties = 123;

describe('getLastPropertyPositionOfActivePage', () => {
  it('should return the correct value', () => {
    const activePage = 1;

    const actual = getLastPropertyPositionOfActivePage(
      activePage,
      numberOfProperties
    );

    expect(actual).toBe(12);
  });

  describe('if `NUMBER_OF_PROPERTIES_PER_PAGE * activePage > numberOfProperties` === true', () => {
    it('should return the correct value', () => {
      const activePage = 13;

      const actual = getLastPropertyPositionOfActivePage(
        activePage,
        numberOfProperties
      );

      expect(actual).toBe(123);
    });
  });
});
