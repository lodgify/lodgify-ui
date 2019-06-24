import { NUMBER_OF_PROPERTIES_PER_PAGE } from '../constants';

import { getNumberOfPages } from './getNumberOfPages';

const numberOfProperties = 1;
const ceil = '⌂';

global.Math.ceil = jest.fn(() => ceil);

describe('getNumberOfPages', () => {
  it('should call Math.ceil with the correct arguments', () => {
    getNumberOfPages(numberOfProperties);

    expect(Math.ceil).toHaveBeenCalledWith(
      numberOfProperties / NUMBER_OF_PROPERTIES_PER_PAGE
    );
  });

  it('should return the correct value', () => {
    const actual = getNumberOfPages(numberOfProperties);

    expect(actual).toEqual(ceil);
  });
});
