import moment from 'moment';
import { shallow } from 'enzyme';

import { renderMonthHeader } from './renderMonthHeader';

const month = moment('2018-11-11');

const localeCode = 'ko';

const getMonthHeader = () =>
  shallow(
    renderMonthHeader(localeCode)({
      month,
    })
  );

describe('renderMonthHeader', () => {
  it('should return a function', () => {
    const actual = renderMonthHeader();

    expect(actual).toBeInstanceOf(Function);
  });

  describe('the returned function', () => {
    it('should return the correct structure', () => {
      const actual = getMonthHeader();

      expect(actual).toMatchSnapshot();
    });
  });
});
